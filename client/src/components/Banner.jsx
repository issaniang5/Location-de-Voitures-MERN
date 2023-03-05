import React from 'react'
import banner from '../assets/images/homephoto.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bonjour là-bas</h1>
          <button className="btn btn-primary opacity-50">Commencer</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
