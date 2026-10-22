import SectionHeader from "./SectionHeader";
import { Min, Max } from "../roleCardUtils";
import warnIcon from "../../assets/icons/warn.png";

function AttributeSection({ attributes, setAttributes }) {

  const total = attributes.reduce((sum, item) => sum + Number(item.num), 0);


  const updateNum = (eng, value) => {
    setAttributes((prev) => {
      return prev.map((item) => {
        return item.eng === eng ? { ...item, num: Number(value) } : item;
      });
    });
  };

  return (
    <>
      <section className="mb-5">
        <SectionHeader
          no="02"
          title="屬性數值"
          desc="角色名稱與職業為必填，其餘可於遊戲中補上"
        />
        <div>
          <div className="d-flex flex-wrap gap-3 mb-4">
            {attributes?.map((item, i) => {
              return (
                <div key={i} className="attribute-box border rounded p-3">
                  <div className="d-flex align-items-center mb-3 text-nowrap ">
                    <span className="text-primary text-bold me-2">
                      {item.eng}
                    </span>
                    <span>{item.ch}</span>
                    <span className="fs-7 ms-auto">{item.count}</span>
                  </div>
                  <div className="d-flex border rounded mb-3 justify-content-between align-items-center">
                    <div
                      className="p-3 "
                      onClick={() => {
                        updateNum(item.eng, item.num - 1);
                      }}
                    >
                      -
                    </div>
                    <div className=" py-2 text-bold fs-3">
                      <input
                        className="form-control border-0 text-center
                              fs-4 p-0
                              "
                        type="number"
                        value={Number(item.num)}
                        onChange={(e) => {
                          updateNum(item.eng, Number(e.target.value));
                        }}
                        onBlur={() => {
                          const n = Number(item.num);
                          updateNum(
                            item.eng,
                            Number(Math.min(Max, Math.max(Min, n))),
                          );
                        }}
                      />
                    </div>
                    <div
                      className="p-3"
                      onClick={() => {
                        updateNum(item.eng, item.num + 1);
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3">
                      困難 {Math.floor(item.num / 2)}
                    </span>
                    <span>極限 {Math.floor(item.num / 5)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex w-100 align-items-center">
          <img src={warnIcon} alt="" className="me-4  object-fit-cover" />
          <p className="text-muted m-0">
            屬性總和{total} · 年齡 30 歲無需年齡調整
          </p>
          <div className="ms-auto d-flex">
            <label className="form-check-label me-1" htmlFor="age-object">
              啟用年齡調整
            </label>
            <div className="form-check form-switch  ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="age-object"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AttributeSection;
