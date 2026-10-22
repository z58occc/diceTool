import SectionHeader from "./SectionHeader";
import { Min, Max } from "../roleCardUtils";

function SkillSection({ skills, setSkills }) {
  const updateSkillNum = (i, type, value) => {
    value = Math.min(Max, Math.max(Min, value));
    setSkills((prev) => {
      return prev.map((item, index) => {
        return i === index ? { ...item, [type]: value } : item;
      });
    });
  };

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

  return (
    <>
      <section className="mb-5" >
        <SectionHeader
          no="03"
          title="技能"
          desc="勾選職業技能後分配點數；遊戲中成功使用的技能可勾選「成長」標記"
        />
        <table className="table align-middle skill-table">
          <thead>
            <tr>
              <th className="text-secondary fw-normal text-start" scope="col">
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
              <th className="text-secondary fw-normal text-nowrap" scope="col">
                最終值
              </th>
              <th className="text-secondary fw-normal text-nowrap" scope="col">
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
                        updateSkillNum(i, "interest", Number(e.target.value));
                      }}
                    />
                  </td>
                  <td>
                    <span className="fs-5">
                      {Number(
                        Math.min(
                          Max,
                          Math.max(
                            Min,
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
                            Max,
                            Math.max(
                              Min,
                              item.base + item.occupation + item.interest,
                            ),
                          ),
                        ) / 2,
                      )}
                      /
                      {Math.floor(
                        Number(
                          Math.min(
                            Max,
                            Math.max(
                              Min,
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
    </>
  );
}

export default SkillSection;
