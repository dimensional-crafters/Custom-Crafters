import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="logo" className="w-8 h-8" />
        </div>
        <div className="flex items-center">
          <button className="text-white text-fira-medium py-2 px-4 font-bold text-m border-b border-transparent hover:border-white">
            My Customs
          </button>
          <button className="text-white text-fira-medium py-2 px-4 font-bold text-m border-b border-transparent hover:border-white">
            Login
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-coda text-white">Custom</h1>
        <h1 className="text-3xl font-coda text-white">Crafters</h1>
        <div className="flex items-center">
          <img src="/assets/custom-crafters.png" alt="cc" className="w-3200 h-1545" />
        </div>
      </div>

    </div>
  )
}

export default Navbar