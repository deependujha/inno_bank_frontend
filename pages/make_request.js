import React, { useEffect } from "react";

const make_request = ({ setCurrent }) => {
  useEffect(() => {
    setCurrent("make_request");
  }, []);
  return (
    <div>make_request</div>
  )
}

export default make_request