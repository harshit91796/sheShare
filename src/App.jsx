import { useState } from 'react'

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './component/signup/Signup'
import Landing from './component/navBar/Navbar'
import Home from './pages/Home/Home'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/users" element={<Landing/>}/>
      </Routes>
    </>
  )
}

export default App
