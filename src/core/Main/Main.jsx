import React from 'react'

import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      <main className='mt-40'>
        <Outlet/>
      </main>
    </div>
  )
}
export default Main
