
import React ,{useState, useEffect} from 'react';
import './styles.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
//import { useEffect, useState } from 'react';


export default function App() {
  const color = [
    "#FF5733",
    "#FFBD33",
    "#75FF33",
    "#0E0D0D",
    "#141DE8",
    "#E87514",
    "#E8141D",
    "#F9F202",
    "#F8FAFA",
    "#D31367",
  ];
  const [current, setcurrent] = useState(null);
  const [background, setbackground] = useState("#F5FCFC");
  

  return (
    <div className="App" style = {{background: background}}>
{current!==null}
<div className= "container">
{color.map((color, index)=>(
<div key={index} className = "card">
  <div style={{
    background:color,
    filter: "brightness(85%)",
    boxShadow: color === background ? " 0 0 5px #000" : ""
  }} 
  className="box" onClick={()=> setbackground(color)}>
<CopyToClipboard text={'color: ${color};'}>
  <p
  style={{ color: color===background?'#fff':color }}
  onClick={()=> setcurrent(color)}
  >
    {color}
    </p>
</CopyToClipboard>
  </div>
  </div>
))}
</div>
  </div>
);


}
