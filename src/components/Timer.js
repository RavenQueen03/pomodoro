import React, { useState, useEffect } from "react";


function Timer({ minutes, seconds, startTimer,toggleStart,started,play}) {
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
 

  return (
    
    <div className="absolute top-[25%] left-[38%]">
      <h1 className="text-9xl text-white font-bold">
        {timerMinutes}:{timerSeconds}
      </h1>
      <button
        onClick={toggleStart} onMouseDown={play}
        className="bg-white text-red-500 font-semibold  mt-[10%] mx-[17%] text-2xl tracking-wide uppercase px-[70px] py-[14px] rounded border-b-4 "
      >
     {!started ? "START" : "STOP"}
     
      </button>
      

      
      
   
    </div>
  );
}
export default Timer;
