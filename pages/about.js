import React, { useEffect } from "react";

const about = ({ setCurrent }) => {
  useEffect(() => {
    setCurrent("about");
  }, []);
  return <div>about</div>;
};

export default about;
