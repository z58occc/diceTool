import icon from "../assets/icons/I.png";
import skillIcon from "../assets/icons/I-2.png";
import stateIcon from "../assets/icons/I-1.png";
import attributeIcon from "../assets/icons/I-5.png";
import itemIcon from "../assets/icons/I-3.png";
import backgroundIcon from "../assets/icons/I-4.png";
import uploadIcon from "../assets/icons/upload.png";
import diceIcon from "../assets/icons/dice.png";
import warnIcon from "../assets/icons/warn.png";
import dragIcon from "../assets/icons/drag.png";
import minusIcon from "../assets/icons/minus.png";
import plusIcon from "../assets/icons/plus.png";
import { useState } from "react";

function RoleCard() {
  const attributes = [
    {
      eng: "STR",
      ch: "力量",
      count: "3D6x5",
    },
    {
      eng: "CON",
      ch: "體質",
      count: "3D6x5",
    },
    {
      eng: "SIZ",
      ch: "體型",
      count: "(2D6+6)×5",
    },
    {
      eng: "DEX",
      ch: "敏捷",
      count: "3D6x5",
    },
    {
      eng: "APP",
      ch: "外貌",
      count: "3D6x5",
    },
    {
      eng: "INT",
      ch: "智力",
      count: "(2D6+6)×5",
    },
    {
      eng: "POW",
      ch: "意志",
      count: "3D6x5",
    },
    {
      eng: "EDU",
      ch: "教育",
      count: "(2D6+6)×5",
    },
  ];

  const [wordCount, setWordCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="d-flex w-100">
          <aside className="aside-menu p-3 border">
            <ul className="menu list-unstyled">
              <li className="border border-dark p-2 d-flex align-items-center">
                <img src={icon} alt="" className="icon me-2" />
                <span>基本資料</span>
              </li>
              <li className="border border-dark p-2 d-flex align-items-center">
                <img src={attributeIcon} alt="" className="icon me-2" />
                <span>屬性數值</span>
              </li>
              <li className="border border-dark p-2 d-flex align-items-center">
                <img src={skillIcon} alt="" className="icon me-2" />
                <span>技能</span>
              </li>
              <li className="border border-dark p-2 d-flex align-items-center">
                <img src={itemIcon} alt="" className="icon me-2" />
                <span>持有物</span>
              </li>
              <li className="border border-dark p-2 d-flex align-items-center">
                <img src={backgroundIcon} alt="" className="icon me-2" />
                <span>背景與羈絆</span>
              </li>
            </ul>
          </aside>
          <main className="main border">
            <section className="mb-5">
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">01</span>
                <span className="fs-4 fw-bold">基本資料</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                角色名稱與職業為必填，其餘可於遊戲中補上
              </p>
              <div className="d-flex">
                <div className="img-zone border me-4 d-flex flex-column justify-content-center align-items-center">
                  <img src={uploadIcon} alt="" className="mb-2" />
                  <span className="text-secondary fs-7">上傳形象圖</span>
                </div>
                <ul className="list-unstyled d-flex flex-wrap data-right">
                  <div
                    className="d-flex justify-content-between
                  gap-3
                  "
                  >
                    <li className="w-33 ">
                      <label
                        htmlFor="chracter-name"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        角色名稱
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="chracter-name"
                      />
                    </li>
                    <li className="w-33 ">
                      <label
                        htmlFor="player-name"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        玩家名稱
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="player-name"
                      />
                    </li>
                    <li className="w-33 ">
                      <label
                        htmlFor="job"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        職業
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="job"
                      />
                    </li>
                  </div>
                  <div className="d-flex justify-content-between gap-3">
                    <li className="w-25 ">
                      <label
                        htmlFor="job"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        年齡
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="job"
                      />
                    </li>
                    <li className="w-25 ">
                      <label
                        htmlFor="job"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        性別
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="job"
                      />
                    </li>
                    <li className="w-25 ">
                      <label
                        htmlFor="job"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        現居地
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="job"
                      />
                    </li>
                    <li className="w-25 ">
                      <label
                        htmlFor="job"
                        className="form-label fs-7 text-muted mb-2"
                      >
                        出生地
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="job"
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </section>

            <section className="mb-5">
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">02</span>
                <span className="fs-4 fw-bold">屬性數值</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                角色名稱與職業為必填，其餘可於遊戲中補上
              </p>
              <div>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {attributes.map((item, i) => {
                    return (
                      <div key={i} className="attribute-box border rounded p-3">
                        <div className="d-flex align-items-center mb-3 text-nowrap ">
                          <span className="text-primary text-bold me-2">
                            {item.eng}
                          </span>
                          <span>{item.ch}</span>
                          <span className="fs-7 ms-auto">{item.count}</span>
                        </div>
                        <div className="d-flex border rounded mb-3 justify-content-between">
                          <div className="p-3 ">-</div>
                          <div className="px-3 py-2 text-bold fs-3">0</div>
                          <div className="p-3 ">+</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>困難 0</span>
                          <span>極限 0</span>
                          <img
                            src={diceIcon}
                            className="object-fit-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="d-flex w-100 align-items-center">
                <img src={warnIcon} alt="" className="me-4  object-fit-cover" />
                <p className="text-muted m-0">
                  屬性總和 445 · 年齡 30 歲無需年齡調整
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

            <section className="mb-5">
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">03</span>
                <span className="fs-4 fw-bold">技能</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                勾選職業技能後分配點數；遊戲中成功使用的技能可勾選「成長」標記
              </p>

              <table className="table align-middle skill-table">
                <thead>
                  <tr>
                    <th
                      className="text-secondary fw-normal text-start"
                      scope="col"
                    >
                      技能名稱
                    </th>
                    <th className="text-secondary fw-normal" scope="col">
                      初始
                    </th>
                    <th className="text-secondary fw-normal" scope="col">
                      職業點
                    </th>
                    <th className="text-secondary fw-normal" scope="col">
                      興趣點
                    </th>
                    <th
                      className="text-secondary fw-normal text-nowrap"
                      scope="col"
                    >
                      最終值
                    </th>
                    <th
                      className="text-secondary fw-normal text-nowrap"
                      scope="col"
                    >
                      困難/極限
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="fw-normal text-nowrap text-start">
                      心理學 Psychology
                    </th>
                    <td>10</td>
                    <td className="text-center">
                      <div className="text-center">
                        <input className=" point-input" type="number" />
                      </div>
                    </td>
                    <td>
                      <input className=" point-input" type="number" />
                    </td>
                    <td>
                      <span className="fs-5">75</span>
                    </td>
                    <td>
                      <span className="">37/15</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className=" p-3">
                <button className="btn btn-primary">＋ 新增技能</button>
              </div>
            </section>

            <section className="mb-5 belongings">
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">04</span>
                <span className="fs-4 fw-bold">持有物</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                隨身物品、武器與財產；可拖曳排序
              </p>
              <div className="d-flex ">
                <div className="belongings-left me-4">
                  <div className="d-flex  align-items-center border px-3 py-2 mb-2">
                    <img className="me-3" src={dragIcon} alt="" />
                    <span className="w-75">聖經</span>
                    <span className="me-3">x1</span>
                    <i className="bi bi-trash"></i>
                  </div>
                  <div
                    className="d-flex align-items-center
                  border px-3 py-2
                  "
                  >
                    <span className="text-primary me-2">+</span>
                    <input
                      className="form-control w-75"
                      placeholder="輸入物品名稱後按 Enter 新增…"
                      type="text"
                    />
                  </div>
                </div>
                <div className="belongings-right">
                  <div className="border p-3 mb-3">
                    <div className="text-secondary mb-3">財產與生活水準</div>
                    <div className="d-flex mb-3 justify-content-between">
                      <span className="text-secondary">信用評級</span>
                      <span>25</span>
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                      <span className="text-secondary">生活水準</span>
                      <span>標準</span>
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                      <span className="text-secondary">現金</span>
                      <span> 50,000</span>
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                      <span className="text-secondary">資產</span>
                      <span> 2,500,000</span>
                    </div>
                  </div>
                  <div className="border p-3">
                    <span className="text-secondary mb-3">武器</span>
                    <div className="d-flex justify-content-between">
                      <span className="mb-3">徒手格鬥</span>
                      <span className="text-primary">1D3 + DB</span>
                    </div>
                    <button className="btn btn-primary">新增武器</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-5 background">
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">05</span>
                <span className="fs-4 fw-bold">背景與羈絆</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                這些欄位會在角色卡預覽中顯示為故事段落
              </p>

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
                  <label for="faith" className="form-label text-secondary">
                    思念與信念
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="faith"
                  />
                </div>
                <div className="mb-3 w-50">
                  <label for="importMan" className="form-label text-secondary">
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
                  <label
                    for="importPlace"
                    className="form-label text-secondary"
                  >
                    意義非凡之地
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="importPlace"
                  />
                </div>
                <div className="mb-3 w-50">
                  <label for="treasure" className="form-label text-secondary">
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
                  <label for="symbol" className="form-label text-secondary">
                    特點
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="symbol"
                  />
                </div>
                <div className="mb-3 w-50">
                  <label for="fear" className="form-label text-secondary">
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
          </main>
          <aside className="derived-state w-100 ">
            <div className="py-5 px-1">
              <h5 className="mb-4">衍生狀態</h5>
              <div className="d-flex w-100 mb-1 justify-content-between">
                <span className="mb-0 text-nowrap">生命值 HP</span>
                <div className="d-flex flex-nowrap align-items-center">
                  <img className="me-1" src={minusIcon} alt="" />
                  <span>11</span>
                  <span>/11</span>
                  <img className="ms-1" src={plusIcon} alt="" />
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar w-100"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex w-100 mb-1 justify-content-between">
                <span className="mb-0  text-nowrap">理智值 SAN</span>
                <div className="d-flex flex-nowrap align-items-center">
                  <img className="me-1" src={minusIcon} alt="" />
                  <span>11</span>
                  <span>/11</span>
                  <img className="ms-1" src={plusIcon} alt="" />
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar san-bar w-100"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex w-100 mb-1 justify-content-between">
                <span className="mb-0  text-nowrap">魔法值 MP</span>
                <div className="d-flex flex-nowrap align-items-center">
                  <img className="me-1" src={minusIcon} alt="" />
                  <span>11</span>
                  <span>/11</span>
                  <img className="ms-1" src={plusIcon} alt="" />
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar mp-bar w-100"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex w-100 mb-1 justify-content-between">
                <span className="mb-0  text-nowrap">幸運 LUK</span>
                <div className="d-flex flex-nowrap align-items-center">
                  <img className="me-1" src={minusIcon} alt="" />
                  <span>11</span>
                  <span>/11</span>
                  <img className="ms-1" src={plusIcon} alt="" />
                </div>
              </div>
              <div class="progress mb-4">
                <div
                  class="progress-bar luk-bar w-100"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex w-100 jsutify-contents-between pb-4 border-bottom">
                <div className="d-flex flex-column w-33 border justify-content-center align-items-center p-3">
                  <span className="fw-bold">+1D4</span>
                  <span className="fs-7">傷害加成</span>
                </div>
                <div className="d-flex flex-column w-33 border justify-content-center align-items-center p-3">
                  <span className="fw-bold">+1</span>
                  <span className="fs-7">體格</span>
                </div>
                <div className="d-flex flex-column w-33 border justify-content-center align-items-center p-3">
                  <span className="fw-bold">7</span>
                  <span className="fs-7">移動力</span>
                </div>

                <div></div>
                <div></div>
              </div>
              <h5 className="my-4">狀態標記</h5>
              <div className="d-flex gap-1 mb-1">
                <div class=" w-50 border py-3  rounded ps-3">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="hurt"
                  />
                  <label class="form-check-label " for="hurt">
                    重傷
                  </label>
                </div>
                <div class=" w-50 border py-3  rounded ps-3">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="dying"
                  />
                  <label class="form-check-label " for="dying">
                    頻死
                  </label>
                </div>
              </div>
              <div className="d-flex gap-1 pb-4 border-bot3om">
                <div class=" w-50 border py-3  rounded ps-3">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="unpredictable-madness"
                  />
                  <label class="form-check-label " for="unpredictable-madness">
                    不定性瘋狂
                  </label>
                </div>
                <div class=" w-50 border py-3  rounded ps-3">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="temporary-madness"
                  />
                  <label class="form-check-label " for="temporary-madness">
                    臨時瘋狂
                  </label>
                </div>
              </div>
              <h5 className="fw-bold my-4">快速擲骰</h5>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="py-2  px-3 text-center border rounded w-25">
                  D100
                </div>
                <div className="py-2  px-3 text-center border rounded w-25">
                  D20
                </div>
                <div className="py-2  px-3 text-center border rounded w-25">
                  D6
                </div>
                <div className="py-2  px-3 text-center border rounded w-25">
                  D4
                </div>
              </div>

              <div className="w-100 p-3 border rounded">
                <div className="d-flex justify-content-between">
                  <span className="fs-7 align-self-end mb-1">偵查 (59)</span>
                  <span className="fs-4">27</span>
                </div>
                <p className="text-success mb-0">困難成功</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default RoleCard;
