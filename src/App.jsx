import React from 'react'
import Profile from './components/Profile'
import Description from './components/Description'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='bg-[#111111] w-[350px] m-auto rounded-lg mt-5 overflow-hidden'>
    <Profile />
    <Description />
    <Footer />

    </div>
  )
}

export default App
