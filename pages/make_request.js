import React, { useState, useEffect } from "react";
import Donate_and_Join_button from "../components/donate/Donate_and_Join_button";
import SquareBox from "../components/make_request/SquareBox";

const make_request = ({ setCurrent, myContract }) => {
  const [idea, setIdea] = useState("");
  const [amount, setAmount] = useState("");
  const [reqId, setReqId] = useState("");
  useEffect(() => {
    setCurrent("make_request");
  }, []);
  return (
    <div className="text-center my-5">
      <h4 className="text-primary">Have an idea?</h4>
      <h5>Make a request to the community</h5>
      <SquareBox
        idea={idea}
        setIdea={setIdea}
        amount={amount}
        setAmount={setAmount}
        myContract={myContract}
        reqId={reqId}
        setReqId={setReqId}
      />
    </div>
  );
};

export default make_request;
