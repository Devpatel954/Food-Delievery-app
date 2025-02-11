import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Cart from './pages/Cart'
import Footer from './components/Footer'
import Login from './components/Login'
import Placeorder from './pages/Placeorder'

const App = () => {

  const [showLogin,setshowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setshowLogin={setshowLogin}/>:<></>}
    
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Placeorder' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
