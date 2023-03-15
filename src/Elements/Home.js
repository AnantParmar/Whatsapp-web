import React from 'react'
import Aside from './Aside'
import Chat from './Chat'
import '../CSS/Home.css'
const Home = () => {
  return (
    <div className='homeDiv'>
      <Aside/>
      <Chat/>
    </div>
  )
}

export default Home
