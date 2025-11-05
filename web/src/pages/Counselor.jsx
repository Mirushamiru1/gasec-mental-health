
import React from 'react'
export default function Counselor(){
  const sn = localStorage.getItem('studentNumber')||'Unknown'
  const key = 'gasec_counselor_msgs_'+sn
  function save(obj){ const arr=JSON.parse(localStorage.getItem(key)||'[]'); arr.push(obj); localStorage.setItem(key, JSON.stringify(arr)); }
  function submit(e){ e.preventDefault(); const name=e.target.name.value; const subject=e.target.subject.value; const message=e.target.message.value; if(!subject||!message) return alert('Fill subject and message'); save({name,subject,message,student:sn,time:Date.now()}); alert('Saved locally. Counselors can download CSV.'); e.target.reset() }
  return (<div className="container"><div className="card"><h4>Contact Counselor</h4><form onSubmit={submit}><input name="name" className="form-control mb-2" placeholder="Your name (optional)"/><input name="subject" className="form-control mb-2" placeholder="Subject" required/><textarea name="message" className="form-control mb-2" placeholder="Message" required></textarea><button className="button" type="submit">Send</button></form></div></div>)
}
