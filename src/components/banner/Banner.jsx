import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";

const Banner = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

export default Banner;
