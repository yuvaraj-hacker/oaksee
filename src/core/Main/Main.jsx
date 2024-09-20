import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Main() {
  return (
<>
      <main className='mt-[79px]' >
        <Outlet/>
      </main>
      <Footer/>
</>
  )
}
export default Main
