import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const layout = ({children}) => {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default layout