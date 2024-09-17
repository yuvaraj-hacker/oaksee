import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Main() {
  return (
    <div>
      <main className='mt-40'>
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}
export default Main
