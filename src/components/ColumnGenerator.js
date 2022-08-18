import React from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ColumnGenerator() {
  const columns = [];
  for (let i = 0; i < 93; i++) {
    const element = React.createElement("div", { key: i, className: "column", style: { height: getRandomInt(10, 600), "border-style": "groove", width: "10px"} });
    columns.push(element);
  }

  return <div className="container">{columns}</div>;
}

export default ColumnGenerator;
