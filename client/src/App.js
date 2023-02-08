import React from 'react'
import {BrowserRouter ,Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Secret from './pages/welcome'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/welcome" element={<Secret/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App