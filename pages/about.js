import React, { useEffect } from "react";

const about = ({ setCurrent }) => {
  useEffect(() => {
    setCurrent("about");
  }, []);
  return (
    <div className="container my-3">
      <h4 className="my-3 d-flex justify-content-center">|| श्री ||</h4>
      <h4>Namastey! 🙏</h4>
      <div className="my-2">
        ➤ Hi, I'm Deependu Jha, a third-year ECE student at BIT Mesra, Ranchi. I
        made this application: Inno-Bank (DAO).
        <br />A non-profit bank for innovators and problem-solvers.
      </div>
      <div className="my-4">
        <h4>Problem it solves 🧐</h4>
        <div className="my-2">
          ➤ Most of us have felt that, we had a idea and we really believed in
          it. But, because of lack of funds we cannot make the product. Even
          though 98 of the 100 ideas won't succeed, but 98 lessons are
          important. And, the 2 ideas that will succeed will fill the void of 98
          failures.
          <p>
            So, tackle the issues of lack of funds for innovation and solving
            problems, here's the Decentralised Autonomous Organization (DAO),{" "}
            <b>INNO-BANK</b>.{" "}
            <span className="text-primary">
              A bank for innovators and problem-solvers
            </span>
            .
            <br />
          </p>
        </div>
      </div>
      <div className="my-4">
        <h4>Tech stacks used 👨‍💻</h4>
        <div className="my-2">
          ➤ <b>Frontend:</b> Next.js, and Bootstrap.
          <br />➤ <b>Backend:</b> Express Js, and MongoDB.
          <br />➤ <b>Smart-contract (Blockchain):</b> Hardhat, Solidity, Infura,
          Ethers.Js
        </div>
      </div>
      <div className="my-4">
        <h4>Inno-Bank 🏦</h4>
        <div className="my-2">
          <h5>
            ➤ <u className="text-success">Donate</u>
          </h5>
          <div className="my-2">
            <div className="row">
              <div className="col-sm">
                <ul>
                  <li>
                    Since our bank is a non-profit Organization. So, only way for
                    bank to have money is through donations.
                  </li>
                  <li>
                    Donors can donate money with their identity and also
                    anonymously.
                  </li>
                  <li>
                    Anyone can donate in the bank, irrespective of the fact that
                    whether the person is a voter in the bank/community or not.
                  </li>
                  <li>
                    Once you donate money, there's no return for it. So, make
                    sure whether you really want to donate and help our
                    community grow.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2">
          <h5>
            ➤{" "}
            <u className="text-success">
              Have an Idea? Request then for funds!
            </u>
          </h5>
          <div className="my-2">
            <div className="row">
              <div className="col-sm">
                <ul>
                  <li>
                    It doesn't matter who you are, if you are someone with an
                    idea, or an innovative solution for a problem. But, lack
                    funds to execute. You can request in the community.
                  </li>
                  <li>
                    Your request will be visible to others in the community with
                    your identity hidden. So write a request without feeling
                    shy, if you truly believe in the idea.
                  </li>
                  <li>
                    Community members can support or ignore your idea/request.
                  </li>
                  <li>To support your ideas, they can vote your request.</li>
                  <li>
                    If your request has more than 50% votes of the community,
                    and bank has more funds than how much require, funds will be
                    transferred to you.
                  </li>
                  <li>
                    To prevent any unprecedented scenario, the limit for fund is
                    upto 10 ethers.
                  </li>
                  <li>
                    Once you become successful, try to donate. So, that we can
                    support more talented indiv
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2">
          <h5>
            ➤ <u className="text-success">Join the community</u>
          </h5>
          <div className="my-2">
            <div className="row">
              <div className="col-sm">
                <ul>
                  <li>
                    To join the community, you need to donate atleast 0.1
                    ethers.
                  </li>
                  <li>
                    Once you have donated, then you can support the ideas and
                    get involved in the community.
                  </li>
                  <li>Community members are the back-bone of the whole DAO.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4>Acknowledgment 🙌</h4>
        <div className="my-2">
          <ul>
            <li>Thanks to `Nitesh Kumar` for his support in frontend.</li>
            <li>
              Thanks to `Crypto Naukri` for organizing the Wev3Hack hackathon.
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h6>{`<===X===>`}</h6>
      </div>
    </div>
  );
};

export default about;
