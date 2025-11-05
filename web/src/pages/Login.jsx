
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const [sn, setSn] = useState('')
  const nav = useNavigate()
  function submit(e){ e.preventDefault(); if(!sn) return alert('Enter student number'); localStorage.setItem('studentNumber', sn); nav('/dashboard') }
  return (<div className="container"><div style={{maxWidth:420, margin:'80px auto'}} className="card text-center"><h2>GASEC Mental Health App</h2><p className="small">Dedicate, Educate, Inspire</p><form onSubmit={submit}><input value={sn} onChange={e=>setSn(e.target.value)} placeholder="Student Number e.g. S12345" className="form-control mb-3"/><button className="button" type="submit">Enter App</button></form></div></div>)
}
