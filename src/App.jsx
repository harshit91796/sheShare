import { useState } from 'react'

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './component/signup/Signup'

import Home from './pages/Home/Home'
import Landing from './pages/landing page/Landing'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </>
  )
}

export default App
