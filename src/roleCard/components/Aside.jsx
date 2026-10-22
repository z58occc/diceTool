import { clamp,updateAt } from "../roleCardUtils";
import minusIcon from "../../assets/icons/minus.png";
import plusIcon from "../../assets/icons/plus.png";

function Aside({ derivedState, setDeriveState }) {
  return (
    <>
      <aside className="derived-state w-100 ">
        <div className="py-5 px-1">
          <h5 className="mb-4">衍生狀態</h5>
          {derivedState.map((item, i) => {
            return (
              <div key={i}>
                <div className="d-flex w-100 mb-1 justify-content-between ">
                  <span className="mb-0  text-nowrap">{item.name}</span>
                  <div className="d-flex  align-items-center w-50 justify-content-between">
                    <img
                      className="me-1"
                      src={minusIcon}
                      alt=""
                      onClick={() =>
                        updateAt(setDeriveState, i, {
                          now: clamp(item.now - 1, 0, item.max),
                        })
                      }
                    />
                    <span>{item.now}</span>
                    <span>/{item.max}</span>
                    <img
                      className="ms-1"
                      src={plusIcon}
                      alt=""
                      onClick={() =>
                        updateAt(setDeriveState, i, {
                          now: clamp(item.now + 1, 0, item.max),
                        })
                      }
                    />
                  </div>
                </div>
                <div className="progress mb-4">
                  <div
                    className={`progress-bar   ${item.color}-bar`}
                    role="progressbar"
                    style={{
                      width: `${clamp((item.now / item.max) * 100, 0, 100)}%`,
                    }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            );
          })}
          <h5 className="my-4">狀態標記</h5>
          <div className="d-flex gap-1 mb-1">
            <div className=" w-50 border py-3  rounded ps-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="hurt"
              />
              <label className="form-check-label " htmlFor="hurt">
                重傷
              </label>
            </div>
            <div className=" w-50 border py-3  rounded ps-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="dying"
              />
              <label className="form-check-label " htmlFor="dying">
                頻死
              </label>
            </div>
          </div>
          <div className="d-flex gap-1 pb-4 border-bot3om">
            <div className=" w-50 border py-3  rounded ps-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="unpredictable-madness"
              />
              <label
                className="form-check-label "
                htmlFor="unpredictable-madness"
              >
                不定性瘋狂
              </label>
            </div>
            <div className=" w-50 border py-3  rounded ps-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="temporary-madness"
              />
              <label className="form-check-label " htmlFor="temporary-madness">
                臨時瘋狂
              </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Aside;
