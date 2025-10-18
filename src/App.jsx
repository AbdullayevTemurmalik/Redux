import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
}

export default App;
