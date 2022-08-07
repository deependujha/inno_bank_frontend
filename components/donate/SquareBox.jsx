import React, { useState } from "react";
import styles from "../../styles/SquareBox.module.css";
import StayAnonymous from "./StayAnonymous";

const SquareBox = ({ clicked }) => {
  const [amount, setAmount] = useState("");
  const [val, setVal] = useState(true);

  const eurekaClicked = () => {
    console.log(`amount is: ${amount}`);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div className={`${styles.squareBox}`}>
        <h3 style={{ color: "white", marginTop: "15px" }}>
          {clicked === "donate"
            ? "Donate to the community"
            : "Join the community"}
        </h3>

        <div className="input-group mt-5 mx-5" style={{ width: "400px" }}>
          <span className="input-group-text"> ⧫</span>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
        </div>
        <div className="mb-4" style={{ color: "white" }}>
          {clicked === "donate"
            ? "Enter amount in wei"
            : "Send atleast 5 ethers to become a member."}
        </div>
        {/* {clicked === "donate" ? <StayAnonymous /> : <></>} */}
        <StayAnonymous clicked={clicked} val={val} setVal={setVal} />
        <button
          className={`btn btn-primary rounded-pill my-4`}
          style={{ width: "175px" }}
          onClick={() => {
            eurekaClicked();
          }}
        >
          Eureka!
        </button>
      </div>
    </div>
  );
};

export default SquareBox;
