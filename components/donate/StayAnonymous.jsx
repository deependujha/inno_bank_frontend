import React from "react";
import styles from "../../styles/SquareBox.module.css";
const StayAnonymous = ({ clicked, val, setVal }) => {
  const checkboxAltered = (e) => {
    let isChecked = e.target.checked;
    // console.log(isChecked);
    setVal(isChecked);
  };
  return (
    <div
      className={`d-flex justify-content-center ${
        clicked === "donate" ? "" : "hide"
      }`}
    >
      <div className="form-check form-switch" style={{ color: "white" }}>
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => checkboxAltered(e)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Donate Anonymously
        </label>
      </div>
    </div>
  );
};

export default StayAnonymous;
