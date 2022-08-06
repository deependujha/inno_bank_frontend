import React from "react";
import styles from "../../styles/Layouts.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className={styles.fixBottom}
      style={{ backgroundColor: "#dddddd", padding: "8px" }}
    >
      <div className="text-center">
        Website Designed by{" "}
        <span style={{ color: "#c21836" }}>Deependu Jha</span> &{" "}
        <span style={{ color: "#c21836" }}>Nitesh Kumar</span>
      </div>
      <div className="text-center">© WildRose 2022. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
