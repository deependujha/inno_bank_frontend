import React, { useEffect } from 'react'

const donate = ({ setCurrent }) => {
  useEffect(() => {
    setCurrent("donate");
  }, []);
  return (
    <div>donate</div>
  )
}

export default donate