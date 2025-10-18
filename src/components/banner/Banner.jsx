import React from "react";

const Banner = ({ onIncrease }) => {
  return (
    <div>
      <h1>Banner</h1>
      <button onClick={onIncrease}>Increase Count</button>
    </div>
  );
};

export default Banner;
