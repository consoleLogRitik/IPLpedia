import { useState } from 'react'
import Navigation from './assets/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './assets/footer' 

function App() {

  return (
    <>
    <div className="font-sans">
    <Navigation/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default App
