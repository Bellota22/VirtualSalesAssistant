import React from 'react'

function Layout({children}) {
  return (
    <div className='h-screen w-full flex flex-col justify-between  ' >
        {children}
    </div>
  )
}

export default Layout