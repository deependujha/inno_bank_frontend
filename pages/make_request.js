import React, { useEffect } from "react";
import StayAnonymous from "../components/donate/StayAnonymous";

const make_request = ({ setCurrent }) => {
  useEffect(() => {
    setCurrent("make_request");
  }, []);
  return <div>Make request</div>;
};

export default make_request;
