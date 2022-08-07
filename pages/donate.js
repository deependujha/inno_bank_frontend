import React, { useState, useEffect } from "react";
import Donate_and_Join_button from "../components/donate/Donate_and_Join_button";
import SquareBox from "../components/donate/SquareBox";

const donate = ({ setCurrent, myContract }) => {
  const [clicked, setClicked] = useState("donate");
  useEffect(() => {
    setCurrent("donate");
  }, []);
  return (
    <div className="text-center my-5">
      <h4 className="text-primary">Support the community</h4>
      <Donate_and_Join_button clicked={clicked} setClicked={setClicked} />
      <SquareBox clicked={clicked} myContract={myContract} />
    </div>
  );
};

export default donate;
