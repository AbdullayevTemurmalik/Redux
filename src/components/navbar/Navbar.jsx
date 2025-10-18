import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((item) => item.laylo.value);
  console.log(count);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default Navbar;
