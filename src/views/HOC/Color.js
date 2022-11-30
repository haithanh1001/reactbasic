import React from "react";

const getRandomColor = () => {
  const color = "#";
  return color + Math.floor(Math.random() * 16777215).toString(16);
};

const Color = (WrappedComponent) => {
  const color = getRandomColor();
  return (props) => (
    <div style={{ color: color }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
