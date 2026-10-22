import { useRef } from "react";
import dragIcon from "../../assets/icons/drag.png";
import SectionHeader from "./SectionHeader";


function InventorySection({inventory,setInventory,setNewInventory,newInventory,weapon,setWeapon}) {
  const newInventoryRef = useRef(null);



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
      <section className="mb-5 belongings" >
        <SectionHeader
          no="04"
          title="持有物"
          desc="隨身物品、武器與財產；可拖曳排序"
        />
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
    </>
  );
}
export default InventorySection;
