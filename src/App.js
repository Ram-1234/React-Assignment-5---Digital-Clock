import  React, { useState } from 'react';
import { unmountComponentAtNode, render } from "react-dom";

const App=()=>{

    var time=new Date().toLocaleTimeString();
    var [currtime,setTime]=useState(time);

    
    function updateTime(){
        time=new Date();
        time=time.toLocaleTimeString('en-US');
        setTime(time); 
     }


      setInterval(updateTime,1000);
  return(
      <>
      <div className='Clock' onClick="handleClick()">
      <h3 className='time'>{currtime}</h3>
      </div>
      </>
    );
}

export default App;