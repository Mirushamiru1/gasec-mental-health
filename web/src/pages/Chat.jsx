
import React, {useEffect, useState} from 'react'
export default function Chat(){
  const [room, setRoom] = useState('general')
  const [msgs, setMsgs] = useState([])
  const [val, setVal] = useState('')
  useEffect(()=>{ load() },[room])
  function key(r){ return 'gasec_chat_'+r }
  function load(){ const arr = JSON.parse(localStorage.getItem(key(room))||'null'); if(!arr){ localStorage.setItem(key(room), JSON.stringify([])); setMsgs([]); } else setMsgs(arr) }
  function send(){ if(!val) return; let anon = sessionStorage.getItem('anonId'); if(!anon){ anon='Anon'+Math.floor(Math.random()*900+100); sessionStorage.setItem('anonId', anon) } const arr = JSON.parse(localStorage.getItem(key(room))||'[]'); arr.push({anon, text:val, time:Date.now()}); localStorage.setItem(key(room), JSON.stringify(arr)); setVal(''); load() }
  return (<div className="container"><div className="card"><h4>Anonymous Chat — {room}</h4><select value={room} onChange={e=>setRoom(e.target.value)} className="form-select mb-2"><option value="general">General</option><option value="exam-stress">Exam Stress</option><option value="friendships">Friendships</option><option value="bullying">Bullying Support</option></select><div style={{height:320,overflow:'auto',background:'#f3f4f6',padding:8,borderRadius:8}}>{msgs.map((m,i)=>(<div key={i} style={{marginBottom:10}}><div style={{fontSize:12,color:'#6b7280'}}>{m.anon} • {new Date(m.time).toLocaleString()}</div><div>{m.text}</div></div>))}</div><div style={{marginTop:10,display:'flex',gap:8}}><input value={val} onChange={e=>setVal(e.target.value)} className="form-control"/><button onClick={send} className="button">Send</button></div></div></div>)
}
