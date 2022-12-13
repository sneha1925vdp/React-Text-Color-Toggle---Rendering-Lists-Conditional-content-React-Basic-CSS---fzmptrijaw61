import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [color, setColor] = useState(false);
  const toggle =()=>{
    setColor(!color);
  }
  return (
    <div id="main">
      <p className={color ? 'redColor' : 'blueColor'} >Newton School</p>
      <button id='button' onClick={toggle}>Change Style</button>
    </div>
  )
}


export default App;
