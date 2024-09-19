import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [level, setLevel] = useState(0);
  const [imageSize, setImageSize] = useState(200); // ขนาดเริ่มต้นของภาพ

  const handleFeed = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);
    setImageSize(Math.min(200 + newLevel, 300)); // จำกัดขนาดของภาพไม่เกิน 300px
  };

  const getImage = () => {
    if (level > 100) {
      return '/maminongtung.jpg'; // เปลี่ยนเป็นรูปภาพ
    }
    return '/Screenshot 2024-09-19 135309.png'; // เปลี่ยนเป็นรูปภาพของหมู
  };

  return (
    <div className="App">
      <h1>เกมส์เลี้ยง “หมูเด้ง”</h1>
      <div className="image-container">
        <img src={getImage()} alt="Pig" style={{ width: `${imageSize}px`, height: `${imageSize}px` }} />
      </div>
      <div className="buttons-container">
        <button onClick={() => handleFeed(5)}>
          <img src="/แตงโม.jpg" alt="Watermelon" className="icon" />
          Watermelon (5)
        </button>
        <button onClick={() => handleFeed(10)}>
          <img src="/ฟักทอง.jpg" alt="Pumpkin" className="icon" />
          Pumpkin (10)
        </button>
        <button onClick={() => handleFeed(20)}>
          <img src="/หญ้า.jpg" alt="Grass" className="icon" />
          Grass (20)
        </button>
      </div>
      <h2>Level: {level}</h2>
    </div>
  );
};

export default App;
