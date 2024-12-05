import React, { useState } from "react";

const Image = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(800);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const increaseSize = () => setWidth((prevWidth) => prevWidth * 1.15);
  const decreaseSize = () => setWidth((prevWidth) => prevWidth * 0.85);

  return (
    <div>
      {isVisible && (
        <img
          id="imgBarcelona"
          src="./images/Barcelona.jpg"
          alt="Барселона"
          width={width}
          style={{ display: isVisible ? "inline" : "none" }}
        />
      )}
      <div className="buttons">
        <button onClick={toggleVisibility}>
          {isVisible ? "Видалити" : "Додати"}
        </button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
      </div>
    </div>
  );
};

export default Image;
