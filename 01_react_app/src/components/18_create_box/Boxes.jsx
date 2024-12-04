import React, { useState } from "react";

const Boxes = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [bg, setBg] = useState("");
  const [boxes, setBoxes] = useState([]);

  const addNewBoxes = () => {
    const newBox = {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: `${bg}`,
    };
    setBoxes([...boxes, newBox]);
  };

  return (
    <div>
      <h1>Box creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="text"
          id="backgroundColor"
          onChange={(e) => setBg(e.target.value)}
        />
      </div>
      <button onClick={addNewBoxes} className="crate-btn">
        Create Box
      </button>
      <div id="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: box.width,
              height: box.height,
              backgroundColor: box.backgroundColor,
              margin: "10px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
