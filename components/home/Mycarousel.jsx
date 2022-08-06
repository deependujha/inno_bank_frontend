import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ width: "100vw", height: "95vh" }}
          className="d-block w-100"
          src="/carousel_image/bank.jpg"
          alt="bank.jpg"
        />
        <Carousel.Caption>
          <h2>Bank for Innovators</h2>
          <p>A non-profit bank for innovators and problem solvers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ width: "100vw", height: "95vh" }}
          className="d-block w-100"
          src="/carousel_image/crypto.jpg"
          alt="crypto.jpg"
        />
        <Carousel.Caption>
          <h2>Leveraging the potential of Blockchains</h2>
          <p>Uses smart-contract for all the transactions and operations.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ width: "100vw", height: "95vh" }}
          src="/carousel_image/community.jpg"
          alt="community.jpg"
        />
        <Carousel.Caption>
          <h2>Community driven</h2>
          <p>“…Of the people, by the people, for the people”</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
