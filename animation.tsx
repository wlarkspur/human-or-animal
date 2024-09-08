import React, { useState } from "react";
import "./src/App.css";

type Spark = {
  id: number;
  x: number;
  y: number;
};

const Spark = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  // 폭죽 애니메이션을 생성하는 함수
  const createSparks = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const newSparks: Spark[] = [];
    console.log("Clicked at:", x, y); // 클릭 위치 출력
    for (let i = 0; i < 10; i++) {
      newSparks.push({ id: Math.random(), x, y });
    }

    setSparks([...sparks, ...newSparks]);

    // 1초 후에 사라지도록 설정
    setTimeout(() => {
      setSparks([]);
    }, 1000);
  };

  return (
    <div className="animation-wrapper">
      <button onClick={createSparks} className="sparkButton">
        O (Yes)
      </button>
      <button onClick={createSparks} className="sparkButton">
        X (No)
      </button>

      {/* 폭죽 요소 렌더링 */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            top: `${spark.y}px`,
            left: `${spark.x}px`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Spark;
