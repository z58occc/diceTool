import { useEffect, useRef, useState } from "react";
import "../scss/diceThree.scss";

function DiceThree() {
  const [isDraging, setIsDragong] = useState(false);
  const diceRef = useRef(null);

  const numAngel = [
    {
      num: 1,
      rotateY: 0,
      translateZ: 0,
    },
    {
      num: 2,
      rotateY: -180,
      translateZ: 0,
    },
    {
      num: 3,
      rotateY: -90,
      translateZ: 0,
    },
    {
      num: 4,
      rotateY: 90,
      translateZ: 0,
    },
    {
      num: 5,
      rotateX: -90,
      translateZ: 150,
    },
    {
      num: 6,
      rotateX: 90,
      translateZ: -150,
    },
  ];

  const rotateRef = useRef({
    // 存「目前」骰子的角度(持續累積)
    x: 0,
    y: 0,
  });

  const dragStart = useRef({
    // 存「這次拖曳」開始時的快照
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  });
  function handleMouseDown(e) {
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotateX: rotateRef.current.x,
      rotateY: rotateRef.current.y,
    };

    setIsDragong(true);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  useEffect(() => {
    if (!isDraging) return;
    function handleMouseMove(e) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      const newRotateY = dragStart.current.rotateY + deltaX * 0.5;
      const newRotateX = clamp(
        dragStart.current.rotateX - deltaY * 0.5,
        -60,
        60,
      );

      rotateRef.current = {
        x: newRotateX,
        y: newRotateY,
      };

      diceRef.current.style.transform = `rotateX(${newRotateX}deg) rotateY(${newRotateY}deg)`;
    }

    function handleMouseUp() {
      setIsDragong(false);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraging]);

  function handleClick() {
    const num = Math.floor(Math.random() * 6) + 1;
    const el = numAngel.find((item) => item.num === num);
    if (!el) return;
    const extraSpins = 2;

    // 目標朝向(查表得到的角度,可能是 0~360 之間的某個值)
    const targetRotateX = el.rotateX ?? 0;
    const targetRotateY = el.rotateY ?? 0;

    // 目前角度「對 360 取餘數」,換算成 0~360 之間代表的實際朝向
    const currentModX = ((rotateRef.current.x % 360) + 360) % 360;
    const currentModY = ((rotateRef.current.y % 360) + 360) % 360;

    // 算出「從目前朝向」轉到「目標朝向」還需要補多少角度
    const deltaX = (targetRotateX - currentModX + 360) % 360;
    const deltaY = (targetRotateY - currentModY + 360) % 360;

    // 新角度 = 目前角度(不取餘數的真實值) + 需要補的角度 + 額外整圈數
    const newX = rotateRef.current.x + deltaX + 360 * extraSpins;
    const newY = rotateRef.current.y + deltaY + 360 * extraSpins;

    diceRef.current.style.transform = `rotateX(${newX}deg) rotateY(${newY}deg) translateZ(${el.translateZ ?? 0}px) `;

    rotateRef.current = {
      x: newX,
      y: newY,
    };
  }

  return (
    <>
      <div className="container">
        <div
          className="dice-3d w-100 d-flex justify-content-center"
          onMouseDown={(e) => handleMouseDown(e)}
          ref={diceRef}
        >
          <div className="face face-front">1</div>
          <div className="face face-back">2</div>
          <div className="face face-right">3</div>
          <div className="face face-left">4</div>
          <div className="face face-top">5</div>
          <div className="face face-bottom">6</div>
        </div>

        <button className="btn btn-primary" onClick={handleClick}>
          擲骰子
        </button>
      </div>
    </>
  );
}
export default DiceThree;
