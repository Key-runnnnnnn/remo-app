import React from 'react'
import Banner_app from "/Banner_app.jpg"

const Banner = () => {
  return (
    <div className="justify-center">
      <div className=" md:py-11 md:px-20 px-10 py-5">
      <img src={Banner_app} alt="Banner_app" 
      className=" border-gray-900 border-2 border-solid rounded-2xl"
      />
      </div>
    </div>
  )
}

export default Banner
