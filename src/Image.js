import React from 'react';
import X from "./image1.jpeg";
import y from "./images2.jpeg";
import z from "./images3.jpeg";

function Image() {
  return <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <img src={X} ></img> 
      <img src={y} ></img> 
      <img src={z} ></img> 
  </div>;
}

export default Image;
