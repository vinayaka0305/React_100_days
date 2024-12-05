import React, { useState } from "react";

const ImageResizer = () => {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(320);

  return (
    <div id="main">
      <img
        src="https://shorturl.at/dkBCO"
        alt="pizza"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <input
        type="range"
        min="100"
        max="800"
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="range"
        min="100"
        max="800"
        onChange={(e) => setHeight(e.target.value)}
      />
    </div>
  );
};

export default ImageResizer;
