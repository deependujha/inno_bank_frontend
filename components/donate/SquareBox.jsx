import React, { useState } from "react";
import styles from "../../styles/SquareBox.module.css";
import StayAnonymous from "./StayAnonymous";
import { ethers } from "ethers";

const SquareBox = ({ clicked, myContract }) => {
  const [amount, setAmount] = useState("");
  const [val, setVal] = useState(true);

  const eurekaClicked = () => {
    if (myContract === "") {
      alert("please connect with metamask first");
      return;
    }
    if (clicked === "donate") {
      if (val) {
        try {
          const options = { value: ethers.utils.parseEther(amount.toString()) };
          myContract
            .donateAnonymously(options)
            .then((tx) => {
              console.log("transaction occured : ", tx.hash);
              return tx
                .wait()
                .then(() => {
                  alert(
                    "You have successfully donated anonymously. Thanks a lot for your contribution."
                  );
                })
                .catch((err) =>
                  alert(`Error occurred while purchasing: ${err.message}`)
                );
            })
            .catch((err) => {
              alert(`Insufficient funds`);
            });
        } catch (e) {
          alert(`Error occurred: ${e}`);
        }
        console.log("clicked when donate and val is true");
      } else {
        try {
          const options = { value: ethers.utils.parseEther(amount.toString()) };
          myContract
            .donate(options)
            .then((tx) => {
              console.log("transaction occured : ", tx.hash);
              return tx
                .wait()
                .then(() => {
                  alert(
                    "You have successfully donated. Thanks a lot for your contribution."
                  );
                })
                .catch((err) =>
                  alert(`Error occurred while purchasing: ${err.message}`)
                );
            })
            .catch((err) => {
              alert(`Insufficient funds`);
            });
        } catch (e) {
          alert(`Error occurred: ${e}`);
        }
        console.log("clicked when donate and val is false");
      }
    } else {
      try {
        const options = { value: ethers.utils.parseEther(amount.toString()) };
        myContract
          .becomeAVoter(options)
          .then((tx) => {
            console.log("transaction occured : ", tx.hash);
            return tx
              .wait()
              .then(() => {
                alert(
                  "You are a member of the community now. You can also vote now."
                );
              })
              .catch((err) =>
                alert(`Error occurred while purchasing: ${err.message}`)
              );
          })
          .catch((err) => {
            alert(`Insufficient funds`);
          });
      } catch (e) {
        alert(`Error occurred: ${e}`);
      }
      console.log("clicked when joining community");
    }
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
            aria-label="Amount"
          />
        </div>
        <div className="mb-4" style={{ color: "white" }}>
          {clicked === "donate"
            ? "Enter amount in ethers"
            : "Send atleast 0.1 ethers to become a member."}
        </div>
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
