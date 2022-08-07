import React, { useEffect } from "react";
import Box from "../components/requests/Box";

const requests = ({ setCurrent, data,myContract }) => {
  useEffect(() => {
    setCurrent("requests");
  }, []);
  return (
    <div className="my-3">
      {data.map((req) => {
        return (
          <div key={req.reqId}>
            <Box idea={req.idea} funds={req.funds} reqId={req.reqId} myContract={myContract} />
          </div>
        );
      })}
    </div>
  );
};

export default requests;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:3000/requests/`);
  const data = await res.json(); // Pass data to the page via props
  return { props: { data } };
}
