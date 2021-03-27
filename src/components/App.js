import  React, { useState } from 'react';

const App=()=>{
  const [ctime, setTime]=useState(0);

  const updateTime=()=>{
    
        setTime(t);
  }
  var t=new Date().toLocaleTimeString();
  
  setInterval(updateTime,1000);
 
  //document.getElementById("time").innerHTML=t;
  
  setInterval(updateTime,1000);
    return (
        <>
        <div id="Clock">
            <h3 id="time">{t}</h3>
        </div>

        </>
    )
}

export default App;