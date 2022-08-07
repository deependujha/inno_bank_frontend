import React, { useState, useEffect } from "react";

const Donate_and_Join_button = ({ clicked, setClicked }) => {
  return (
    <div className="my-3">
      <button
        className={`btn btn-${
          clicked == "donate" ? "primary" : "outline-dark"
        } rounded-pill mx-1`}
        style={{ width: "175px" }}
        onClick={() => {
          setClicked("donate");
        }}
      >
        Donate
      </button>
      <button
        className={`btn btn-${
          clicked === "join" ? "primary" : "outline-dark"
        } rounded-pill mx-1`}
        style={{ width: "175px" }}
        onClick={() => {
          setClicked("join");
        }}
      >
        Join community
      </button>
    </div>
  );
};

export default Donate_and_Join_button;
