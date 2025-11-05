
import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'
export default function Tracker(){
  const sn = localStorage.getItem('studentNumber')||'Unknown'
  const key = 'gasec_moods_'+sn
  useEffect(()=>{ renderChart() },[])
  function load(){ return JSON.parse(localStorage.getItem(key)||'[]') }
  function save(v){ const arr=load(); arr.push({value:v,time:Date.now()}); localStorage.setItem(key, JSON.stringify(arr)); renderChart() }
  function renderChart(){ const data = load().slice(-20); const labels=data.map(d=>new Date(d.time).toLocaleString()); const values=data.map(d=>d.value); const ctx = document.getElementById('chart')?.getContext('2d'); if(!ctx) return; if(window._gasecChart) window._gasecChart.destroy(); window._gasecChart = new Chart(ctx, {type:'line', data:{labels, datasets:[{label:'Mood', data:values, fill:true, backgroundColor:'rgba(99,102,241,0.12)', borderColor:'#6366f1'}]}}) }
  return (<div className="container"><div className="card"><h4>Well-being Tracker</h4><div style={{display:'flex',gap:8}}><button onClick={()=>save(5)} className="button">😃</button><button onClick={()=>save(4)} className="button">🙂</button><button onClick={()=>save(3)} className="button">😐</button><button onClick={()=>save(2)} className="button">😟</button><button onClick={()=>save(1)} className="button">😢</button></div><div style={{marginTop:12}}><canvas id="chart" height="120"></canvas></div></div></div>)
}
