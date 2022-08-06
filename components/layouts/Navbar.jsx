import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import style from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";
import ABI from "/abi";
import axios from "axios";
const fetcher = async (addr) => {
  const Data = await fetch(`http://159.223.186.223:3200/account/${addr}`);
  const data = await Data.json();
  return data;
};

const Navbar = ({
  usrAddr,
  setUsrAddr,
  setMyContract,
  logInStatus,
  setLogInStatus,
  userName,
  setUserName,
  usrDetails,
  setUsrDetails,
}) => {
  const router = useRouter();

  const [current, setCurrent] = useState("home");
  const [con, setCon] = useState(false);
  // useEffect(() => {
  //   if (usrAddr != "") {
  //     axios
  //       .get(`http://159.223.186.223:3200/account/${usrAddr}`)
  //       .then((response) => {
  //         // console.log(response.data.name);
  //         if (response.data.name === undefined) {
  //           router.push("/myAccount");
  //           setUserName("Please create an account");
  //         } else {
  //           setUsrDetails(response.data);
  //           setUserName(`Hii, ${response.data.name}`);
  //           setCon(true);
  //           setLogInStatus(true);
  //         }
  //       })
  //       .catch((e) => {
  //         alert(`an error occurred: ${e}`);
  //       });
  //   }
  // }, [usrAddr]);
  const connectWithMetaMask = async () => {
    if (!window.ethereum) {
      alert("Please install metamask");
    } else {
      try {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        // to check with which network metamask is currently connected, and show required alert
        const { chainId } = await provider.getNetwork();
        // console.log(chainId);
        if (chainId != 3) {
          alert(
            "Please connect with ropsten testnet in metamask, and refresh the page."
          );
        } else {
          // MetaMask requires requesting permission to connect users accounts
          await provider.send("eth_requestAccounts", []);

          // The MetaMask plugin also allows signing transactions to
          // send ether and pay to change state within the blockchain.
          // For this, you need the account signer...
          let signer = provider.getSigner();
          // console.log("connected with metamask");

          // creating an instance of the smart contract
          // it takes three parameters => {contract's address, abi, signer/provider}
          // provider can perform read only transactions
          // signer can perform all kind of transactions
          let contract = new ethers.Contract(
            "0x20bD9e821e257340F5E37bCD817184feb6EB1A34",
            ABI,
            signer
          );
          setMyContract(contract);
          // console.log(`contract address: ${contract.address}`);
          // console.log("Account:", await signer.getAddress());
          let usrAddress = await signer.getAddress();
          // console.log(usrAddress);
          setUsrAddr(usrAddress);
        }
      } catch (e) {
        alert(`an error occurred: ${e}`);
      }
    }
  };
  const btnClick = async () => {
    if (con) {
      setMyContract("");
      setUsrAddr("");
      setUsrDetails({});
      setCon(false);
      setUserName("");
      setLogInStatus(false);
    } else {
      connectWithMetaMask();
    }
  };

  const navBtnClick = (which) => {
    setCurrent(which);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">D-shop</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle
    navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href="/">
              <li className="nav-item ">
                <a
                  className={`nav-link ${current == "home" ? "active" : ""} ${
                    style.myLink
                  }`}
                  onClick={() => {
                    navBtnClick("home");
                  }}
                >
                  Home
                </a>
              </li>
            </Link>
            <Link href="/about">
              <li className="nav-item">
                <a
                  className={`nav-link ${current == "about" ? "active" : ""} ${
                    style.myLink
                  }`}
                  onClick={() => {
                    navBtnClick("about");
                  }}
                >
                  About us
                </a>
              </li>
            </Link>
            <Link href="/myOrder">
              <li className="nav-item">
                <a
                  className={`nav-link ${current == "order" ? "active" : ""} ${
                    style.myLink
                  }`}
                  onClick={() => {
                    navBtnClick("order");
                  }}
                >
                  My orders
                </a>
              </li>
            </Link>
            <Link href="/myAccount">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    current == "account" ? "active" : ""
                  } ${style.myLink}`}
                  onClick={() => {
                    navBtnClick("account");
                  }}
                >
                  {logInStatus ? `My account` : `Create account`}
                </a>
              </li>
            </Link>
          </ul>
          <span className="mx-3">
            <h5>{userName}</h5>
          </span>
          <button
            className={`btn ${con ? `btn-danger` : `btn-info`}`}
            // onClick={btnClick}
          >
            {con ? `logout` : `Connect with metamask`}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
