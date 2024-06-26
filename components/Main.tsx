import React from 'react'

function Main() {
  return (
    <div>
        <div className="relative h-screen overflow-hidden">
      <video className=" absolute top-0 left-0 w-full h-full object-cover animate-background-animation" autoPlay muted loop>
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center animate-text-animation">
        <h1 className="text-slate-500 bg-slate-50 text-4xl md:text-4xl lg:text-6xl font-bold p-1  ">
            MANUFACTURER OF WHITE REFINED SUGAR!
        </h1>
      </div>
    </div>
    </div>
  )
}

export default Main