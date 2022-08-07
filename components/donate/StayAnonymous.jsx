import React from "react";

const StayAnonymous = ({ clicked }) => {
  return (
    <div className={`d-flex justify-content-center `}>
      <div className="form-check form-switch" style={{ color: "white" }}>
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Donate Anonymously
        </label>
      </div>
    </div>
  );
};

export default StayAnonymous;
