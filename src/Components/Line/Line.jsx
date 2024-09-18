import React from 'react'

function Line() {
  return (
    <>
      <div className='flex fixed top-0 -z-50 justify-around 2xl:w-5/6  w-11/12 left-[4%] 2xl:left-[8%] '>
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










