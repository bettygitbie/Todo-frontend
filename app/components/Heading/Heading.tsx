'use client'
import React from 'react'
import RocketIcon from '@mui/icons-material/Rocket';

function Heading() {
  return (
    <div className="py-20 bg-black w-full text-center font-bold">
    <h1>
      <span className="text-cyan-500 text-5xl text-"><RocketIcon /> Todo</span>{" "}
      <span className="text-indigo-500 text-5xl">App</span>{" "}
    </h1>
  </div>
  )
}

export default Heading