import React from "react";
import Card from "react-bootstrap/Card";
import { ethers } from "ethers";

const Box = ({ reqId, idea, funds, myContract }) => {
  const btnClick = (reqId) => {
    if (myContract === "") {
      alert("Please connect with metamask");
      return;
    }
    try {
      myContract
        .voteForARequest(reqId)
        .then((tx) => {
          console.log("transaction occured : ", tx.hash);
          return tx
            .wait()
            .then(() => {
              alert("Thanks for supporting!");
            })
            .catch((err) =>
              alert(`Error occurred while supporting: ${err.message}`)
            );
        })
        .catch((err) => {
          alert(`Insufficient funds: ${err}`);
        });
    } catch (e) {
      alert(`Error occurred: ${e}`);
    }
  };
  return (
    <div className="d-flex justify-content-center my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Idea</Card.Title>
          <Card.Text>{idea}</Card.Text>
          <Card.Text>
            Funds: <span className="text-primary">{funds} wei</span>
          </Card.Text>
          <button className="btn btn-success" onClick={() => btnClick(reqId)}>
            Support
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Box;
