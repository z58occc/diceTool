import SectionHeader from "./SectionHeader";

function BackgroundSection({ wordCount, setWordCount }) {
  return (
    <>
      <section className="mb-5 background" id="background">
        <SectionHeader
          no="05"
          title="背景與羈絆"
          desc="這些欄位會在角色卡預覽中顯示為故事段落"
        />
        <div className="position-relative mb-3">
          <label className="mb-2 text-secondary" htmlFor="describe">
            個人描述
          </label>
          <textarea
            className="form-control background-textarea"
            name=""
            id="describe"
            maxLength={10000}
            onChange={(e) => setWordCount(e.target.textLength)}
          ></textarea>
          <span className="wordCount">{wordCount}/10000</span>
        </div>
        <div className="d-flex jusitfy-content-between gap-3">
          <div className="mb-3 w-50">
            <label htmlFor="faith" className="form-label text-secondary">
              思念與信念
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="faith"
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="importMan" className="form-label text-secondary">
              重要之人
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="importMan"
            />
          </div>
        </div>
        <div className="d-flex jusitfy-content-between gap-3">
          <div className="mb-3 w-50">
            <label htmlFor="importPlace" className="form-label text-secondary">
              意義非凡之地
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="importPlace"
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="treasure" className="form-label text-secondary">
              寶貴之物
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="treasure"
            />
          </div>
        </div>
        <div className="d-flex jusitfy-content-between gap-3">
          <div className="mb-3 w-50">
            <label htmlFor="symbol" className="form-label text-secondary">
              特點
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="symbol"
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="fear" className="form-label text-secondary">
              恐懼與狂熱
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="fear"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BackgroundSection;
