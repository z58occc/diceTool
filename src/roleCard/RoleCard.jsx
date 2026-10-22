import { useEffect, useRef, useState } from "react";
import BasicInfoSection from "./components/BasicInfoSection";
import warnIcon from "../assets/icons/warn.png";
import dragIcon from "../assets/icons/drag.png";
import minusIcon from "../assets/icons/minus.png";
import plusIcon from "../assets/icons/plus.png";
import SideMenu from "./components/SideMenu";

function RoleCard() {
  const basicDataRef = useRef(null);
  const attributeRef = useRef(null);
  const skillRef = useRef(null);
  const itemRef = useRef(null);
  const backgroundRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [newInventory, setNewInventory] = useState("");
  const newInventoryRef = useRef(null);
  const [weapon, setWeapon] = useState([
    {
      name: "徒手格鬥",
      damage: "1D3 + DB",
    },
  ]);
  const min = 0;
  const max = 99;

  const [attributes, setAttributes] = useState([
    {
      eng: "STR",
      ch: "力量",
      count: "3D6x5",
      num: 45,
    },
    {
      eng: "CON",
      ch: "體質",
      count: "3D6x5",
      num: 45,
    },
    {
      eng: "SIZ",
      ch: "體型",
      count: "(2D6+6)x5",
      num: 45,
    },
    {
      eng: "DEX",
      ch: "敏捷",
      count: "3D6x5",
      num: 45,
    },
    {
      eng: "APP",
      ch: "外貌",
      count: "3D6x5",
      num: 45,
    },
    {
      eng: "INT",
      ch: "智力",
      count: "(2D6+6)x5",
      num: 45,
    },
    {
      eng: "POW",
      ch: "意志",
      count: "3D6x5",
      num: 45,
    },
    {
      eng: "EDU",
      ch: "教育",
      count: "(2D6+6)x5",
      num: 45,
    },
  ]);

  const [skills, setSkills] = useState([
    {
      name: "心理學 Psychology",
      base: 0,
      occupation: 0,
      interest: 0,
    },
  ]);

  const [inventory, setInventory] = useState([
    {
      name: "聖經",
      qty: 1,
    },
  ]);

  const [derivedState, setDeriveState] = useState([
    {
      name: "生命值 HP",
      color: "",
      now: 10,
      max: 10,
    },
    {
      name: "魔法值 MP",
      color: "mp",
      now: 10,
      max: 10,
    },
    {
      name: "理智值 SAN",
      color: "san",
      now: 10,
      max: 99,
    },
    {
      name: "幸運 LUK",
      color: "luk",
      now: 10,
      max: 99,
    },
  ]);

  const updateNum = (eng, value) => {
    setAttributes((prev) => {
      return prev.map((item) => {
        return item.eng === eng ? { ...item, num: Number(value) } : item;
      });
    });
  };

  const updateSkillNum = (i, type, value) => {
    value = Math.min(max, Math.max(min, value));
    setSkills((prev) => {
      return prev.map((item, index) => {
        return i === index ? { ...item, [type]: value } : item;
      });
    });
  };

  const [wordCount, setWordCount] = useState(0);

  function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  }

  // 換圖或元件卸載時釋放舊網址，避免記憶體洩漏
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const total = attributes.reduce((sum, item) => sum + Number(item.num), 0);

  function addSkill() {
    setSkills((prev) => {
      return [
        ...prev,
        {
          name: "",
          base: 0,
          occupation: 0,
          interest: 0,
        },
      ];
    });
  }

  function deleteInventory(i) {
    const arr = [...inventory];
    arr.splice(i, 1);
    setInventory(arr);
  }

  function addInventory() {
    newInventoryRef.current.value = "";
    setInventory((prev) => {
      return [
        ...prev,
        {
          name: newInventory,
          qty: 1,
        },
      ];
    });
  }

  function addWeapon() {
    setWeapon((prev) => {
      return [
        ...prev,
        {
          name: "",
          qty: "",
        },
      ];
    });
  }

  return (
    <>
      <div className="container">
        <div className="d-flex w-100  ">
          <SideMenu />
          <main className="main border">
            <BasicInfoSection />

            <section className="mb-5" ref={attributeRef}>
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">02</span>
                <span className="fs-4 fw-bold">屬性數值</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                角色名稱與職業為必填，其餘可於遊戲中補上
              </p>
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
                                  Number(Math.min(max, Math.max(min, n))),
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

            <section className="mb-5" ref={skillRef}>
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
                  {skills.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th className="fw-normal text-nowrap text-start">
                          <input
                            type="text"
                            className="border-0"
                            value={item.name}
                            onChange={(e) => {
                              setSkills((prev) => {
                                return prev.map((item, index) => {
                                  return i === index
                                    ? { ...item, name: e.target.value }
                                    : item;
                                });
                              });
                            }}
                          />
                        </th>
                        <td>{item.base}</td>
                        <td className="text-center">
                          <div className="text-center">
                            <input
                              className=" point-input"
                              type="number"
                              value={item.occupation}
                              onChange={(e) => {
                                updateSkillNum(
                                  i,
                                  "occupation",
                                  Number(e.target.value),
                                );
                              }}
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            className=" point-input"
                            type="number"
                            value={item.interest}
                            onChange={(e) => {
                              updateSkillNum(
                                i,
                                "interest",
                                Number(e.target.value),
                              );
                            }}
                          />
                        </td>
                        <td>
                          <span className="fs-5">
                            {Number(
                              Math.min(
                                max,
                                Math.max(
                                  min,
                                  item.base + item.occupation + item.interest,
                                ),
                              ),
                            )}
                          </span>
                        </td>
                        <td>
                          <span className="">
                            {Math.floor(
                              Number(
                                Math.min(
                                  max,
                                  Math.max(
                                    min,
                                    item.base + item.occupation + item.interest,
                                  ),
                                ),
                              ) / 2,
                            )}
                            /
                            {Math.floor(
                              Number(
                                Math.min(
                                  max,
                                  Math.max(
                                    min,
                                    item.base + item.occupation + item.interest,
                                  ),
                                ),
                              ) / 5,
                            )}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className=" py-3">
                <button className="btn btn-primary" onClick={addSkill}>
                  ＋ 新增技能
                </button>
              </div>
            </section>

            <section className="mb-5 belongings" ref={itemRef}>
              <div className="mb-1">
                <span className="fs-7 me-2-5 text-primary">04</span>
                <span className="fs-4 fw-bold">持有物</span>
              </div>
              <p className="text-muted border-bottom mb-4 pb-3">
                隨身物品、武器與財產；可拖曳排序
              </p>
              <div className="d-flex ">
                <div className="belongings-left me-4">
                  {inventory.map((item, i) => {
                    return (
                      <div
                        className="d-flex  align-items-center border px-3 py-2 mb-2"
                        key={i}
                      >
                        <img className="me-3" src={dragIcon} alt="" />
                        <span className="w-75 fs-5">{item.name}</span>
                        <input
                          type="text"
                          className="form-control w-20 me-3 fs-5"
                          value={item.qty}
                          onChange={(e) => {
                            setInventory((prev) => {
                              return prev.map((item, index) => {
                                return i === index
                                  ? { ...item, qty: e.target.value }
                                  : item;
                              });
                            });
                          }}
                        />
                        <i
                          className="bi bi-trash fs-3"
                          onClick={() => deleteInventory(i)}
                        ></i>
                      </div>
                    );
                  })}
                  <div
                    className="d-flex align-items-center
                  border px-3 py-2
                  "
                  >
                    <span className="text-primary me-2">+</span>
                    <input
                      ref={newInventoryRef}
                      className="form-control w-75"
                      placeholder="輸入物品名稱後按 Enter 新增…"
                      type="text"
                      onChange={(e) => {
                        setNewInventory(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addInventory();
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="belongings-right">
                  <div className="border p-3 mb-3">
                    <div className="text-secondary mb-3">財產與生活水準</div>
                    <div className="d-flex mb-3 justify-content-between align-items-center">
                      <span className="text-secondary">信用評級</span>
                      <input type="number" className="form-control w-25" />
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                      <span className="text-secondary">生活水準</span>
                      <span>標準</span>
                    </div>
                    <div className="d-flex mb-3 justify-content-between align-items-center">
                      <span className="text-secondary">現金</span>
                      <input type="number" className="form-control w-50" />
                    </div>
                    <div className="d-flex mb-3 justify-content-between align-items-center">
                      <span className="text-secondary">資產</span>
                      <input type="number" className="form-control w-50" />
                    </div>
                  </div>
                  <div className="border p-3">
                    <span className="text-secondary mb-3">武器</span>
                    {weapon.map((item, i) => {
                      return (
                        <div key={i} className="d-flex justify-content-between">
                          <input
                            type="text"
                            value={item.name}
                            className="w-50 mb-3 form-control"
                            onChange={(e) => {
                              setWeapon((prev) => {
                                return prev.map((item, index) => {
                                  return i === index
                                    ? { ...item, name: e.target.value }
                                    : item;
                                });
                              });
                            }}
                          />
                          <input
                            type="text"
                            value={item.damage}
                            className="w-50 text-primary mb-3 form-control "
                            onChange={(e) => {
                              setWeapon((prev) => {
                                return prev.map((item, index) => {
                                  return i === index
                                    ? { ...item, qty: e.target.value }
                                    : item;
                                });
                              });
                            }}
                          />
                        </div>
                      );
                    })}
                    <button className="btn btn-primary" onClick={addWeapon}>
                      新增武器
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-5 background" ref={backgroundRef}>
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
                  <label
                    htmlFor="importMan"
                    className="form-label text-secondary"
                  >
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
                    htmlFor="importPlace"
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
                  <label
                    htmlFor="treasure"
                    className="form-label text-secondary"
                  >
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
          </main>
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
                            setDeriveState((prev) => {
                              return prev.map((item, index) => {
                                return i === index
                                  ? { ...item, now: item.now - 1 }
                                  : item;
                              });
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
                            setDeriveState((prev) => {
                              return prev.map((item, index) => {
                                return i === index
                                  ? { ...item, now: item.now + 1 }
                                  : item;
                              });
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="progress mb-4">
                      <div
                        className={`progress-bar w-100 ${item.color}-bar`}
                        role="progressbar"
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
                  <label
                    className="form-check-label "
                    htmlFor="temporary-madness"
                  >
                    臨時瘋狂
                  </label>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default RoleCard;
