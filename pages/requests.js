import React, { useEffect } from 'react'

const requests = ({ setCurrent }) => {
  useEffect(() => {
    setCurrent("requests");
  }, []);
  return (
    <div>requests</div>
  )
}

export default requests