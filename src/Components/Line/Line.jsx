import React from 'react'
import '../Line/Line.css'
function Line() {
  return (
    <>
      {/* <div className="h-screen w-[1px] fixed top-0 left-[320px] bg-yellow-200 sm:bg-none  -z-10  line ">
      </div>
      <div className="h-screen w-[1px] fixed top-0 left-[640px] bg-yellow-200  -z-10 sm:bg-none line">
      </div>
      <div className="h-screen w-[1px] fixed top-0 left-[960px] bg-yellow-200  -z-10  sm:bg-none line">
      </div>
      <div className="h-screen w-[1px] fixed top-0 left-[1280px] bg-yellow-200 sm:bg-none   -z-10 line ">
      </div>
      <div className="h-screen w-[1px] fixed top-0 left-[1600px] bg-yellow-200 sm:bg-none  -z-20 line">
      </div> */}
      <div className='flex fixed top-0 -z-50 justify-around w-4/5 left-[10%]'>
        <div className="h-screen w-[1px]  bg-yellow-100 ">
        </div>
        <div className="h-screen w-[1px] bg-yellow-100 ">
        </div>
        <div className="h-screen w-[1px] bg-yellow-100  hidden md:block">
        </div>
        <div className="h-screen w-[1px] bg-yellow-100  hidden lg:block">
        </div>
        <div className="h-screen w-[1px] bg-yellow-100  hidden lg:block">
        </div>
      </div>
    </>
  )
}
export default Line
