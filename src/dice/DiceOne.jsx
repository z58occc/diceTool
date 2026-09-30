import { useEffect, useRef, useState } from "react";
import DiceBox from "@3d-dice/dice-box";

function DiceOne() {
  const diceBoxRef = useRef(null);
  const [num, setNum] = useState(0);
  const [diceAmount, setDiceAmount] = useState("");
  const [diceNum, setDiceNum] = useState("");

  async function handleClick() {
    const result = await diceBoxRef.current.roll(`${diceAmount}d${diceNum}`);
    console.log(result);
    let initNUm = 0;
    result.forEach((item) => {
      initNUm += item.value;
    });
    setNum(initNUm);
  }

  useEffect(() => {
    const diceBox = new DiceBox({
      assetPath: "assets/",
      origin: "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/",
      scale: 9,
      container: "#dice-box",
    });
    diceBox.init().then(() => {
      diceBoxRef.current = diceBox;
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="dice-box d-flex w-100 bg-dark" id="dice-box"></div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-center">目前擲骰為：</p>
          <div className="text-center">
            <input
              type="number"
              className="w-25"
              onChange={(e) => setDiceAmount(e.target.value.toString())}
            />
            <span>d</span>
            <input
              type="number"
              className="w-25"
              onChange={(e) => setDiceNum(e.target.value.toString())}
            />
          </div>
          <button className="btn btn-primary m-5" onClick={handleClick}>
            擲骰子
          </button>
          <p>結果是：{num === 0 ? "" : num}</p>
        </div>
      </div>
    </>
  );
}

export default DiceOne;
