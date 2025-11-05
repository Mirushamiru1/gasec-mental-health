
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Dashboard(){ 
  const sn = localStorage.getItem('studentNumber')
  const nav = useNavigate()
  if(!sn) { nav('/'); return null }
  function logout(){ localStorage.removeItem('studentNumber'); nav('/') }
  return (<div className="container"><div className="nav"><div style={{display:'flex',alignItems:'center',gap:10}}><img src="/logo-192.png" width="40"/><strong style={{color:'#fff'}}>GASEC</strong></div><div><span style={{color:'#fff',marginRight:12}}>ID: {sn}</span><button onClick={logout} className="button">Logout</button></div></div><div className="card"><h3>Welcome, Student {sn}</h3><p className="small">Choose a feature below</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:14,marginTop:18}}><Link to="/chat" className="card" style={{background:'linear-gradient(135deg,#3b82f6,#6366f1)',color:'#fff',textDecoration:'none'}}>Anonymous Chat</Link><Link to="/music" className="card" style={{background:'linear-gradient(135deg,#06b6d4,#3b82f6)',color:'#fff',textDecoration:'none'}}>Relaxation Music</Link><Link to="/tracker" className="card" style={{background:'linear-gradient(135deg,#10b981,#059669)',color:'#fff',textDecoration:'none'}}>Well-being Tracker</Link><Link to="/counselor" className="card" style={{background:'linear-gradient(135deg,#f97316,#ea580c)',color:'#fff',textDecoration:'none'}}>Contact Counselor</Link><Link to="/rules" className="card" style={{background:'linear-gradient(135deg,#8b5cf6,#d946ef)',color:'#fff',textDecoration:'none'}}>Cases & Rules</Link></div></div></div>)
}
