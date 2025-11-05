
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Music from './pages/Music'
import Tracker from './pages/Tracker'
import Counselor from './pages/Counselor'
import Rules from './pages/Rules'
import './styles.css'
// Firebase config (copy your config to firebaseConfig.js)
import { firebaseConfig } from './firebaseConfig.example.js'
initializeApp(firebaseConfig)

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/tracker" element={<Tracker/>} />
        <Route path="/counselor" element={<Counselor/>} />
        <Route path="/rules" element={<Rules/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
