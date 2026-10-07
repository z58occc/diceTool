import { useRef, useState } from "react";
import "../../node_modules/animate.css";

function DiceTwo() {
  // animate__bounce
  const diceRef = useRef(null);
  const [num, setNum] = useState(1);
  function handleClick() {
    diceRef.current.classList.remove("animate__bounce");
    setTimeout(() => {
      diceRef.current.classList.add("animate__bounce");
    }, 0);
    let t = 0;
    let d = 100;
    const intervalId = setInterval(() => {
      setNum(Math.floor(Math.random() * 6) + 1);
      t = t + d;

      if (t === 1000) {
        clearInterval(intervalId);
      }
    }, d);
  }
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row-reverse ">
          <div
            ref={diceRef}
            className="dice-box  bg-primary d-flex w-50 justify-content-center align-items-center
           animate__animated
          "
          >
            {num}
          </div>
          <div className="d-flex justify-content-center w-50 align-items-center">
            <button className="btn btn-dark" onClick={handleClick}>
              擲骰子
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiceTwo;
