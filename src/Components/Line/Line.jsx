import React from 'react'
import '../Line/Line.css'

function Line() {
  return (
    <>
     <div className="h-screen w-[1px] fixed top-0 left-[320px] bg-yellow-200 sm:bg-none  -z-10  line ">
        </div>
        <div className="h-screen w-[1px] fixed top-0 left-[640px] bg-yellow-200  -z-10 sm:bg-none line">
        </div>
        <div className="h-screen w-[1px] fixed top-0 left-[960px] bg-yellow-200  -z-10  sm:bg-none line">
        </div>
        <div className="h-screen w-[1px] fixed top-0 left-[1280px] bg-yellow-200 sm:bg-none   -z-10 line ">
        </div>
        <div className="h-screen w-[1px] fixed top-0 left-[1600px] bg-yellow-200 sm:bg-none  -z-20 line">
        </div>
    </>
  )
}

export default Line
