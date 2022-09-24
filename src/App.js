import React, { useState, useEffect } from "react";

import useSound from "use-sound";
import boopSfx from "./sounds/button-press.wav";
import Header from "./components/Header";
import Body from "./components/Body";
import Timer from "./components/Timer";

function App() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [bgcolor, setbgColor] = useState("bg-red-500");
  const [shortBreak, setShortBreak] = useState(false);
  const [count,setCount]=useState(1)

  function startTimer() {
    setStarted(true);
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    
   
      if (minutes === 0 && seconds === 0 && bgcolor == "bg-red-500") {
        setStarted(false);
        setbgColor("bg-blue-500");
        setMinutes(1);
        setSeconds(0);
        setCount(count+1)
   console.log(count)
      }

      if (minutes === 0 && seconds === 0 && bgcolor == "bg-blue-500") {
        setStarted(false);
        setbgColor("bg-red-500");
        setMinutes(1);
        setSeconds(0);
        setCount(count+1)
        console.log(count)
      }

   
      
    
      if ( count === 3 && minutes === 0 && seconds === 0 &&  bgcolor == "bg-red-500") {
        setStarted(false);
        setbgColor("bg-green-500");
        setMinutes(1);
        setSeconds(0);
      setCount(1)
        console.log(count);
      }

      
      if (minutes === 0 && seconds === 0 && bgcolor == "bg-green-500") {
        setStarted(false);
        setbgColor("bg-red-500");
        setMinutes(1);
        setSeconds(0);
      
   console.log(count)
      }

    
  }

  function focusTime() {
    setStarted(false);
    setbgColor("bg-red-500");
    setMinutes(1);
    setSeconds(0);
  }

  function startShortBreak() {
    setStarted(false);

    setbgColor("bg-blue-500");
    setMinutes(5);
    setSeconds(0);
  }

  function startLongBreak() {
    setStarted(false);

    setbgColor("bg-green-500");
    setMinutes(15);
    setSeconds(0);
  }

  const [play] = useSound(boopSfx, { volume: 0.25 });

  useEffect(() => {
    if (started) {
      startTimer();
    } else {
      clearInterval();
    }
  }, [started, seconds]);

  const toggleStart = () => {
    setStarted(!started);
  };

  return (
    <body className={`h-screen ${bgcolor}`}>
      <Header />
      <Body
        bgcolor={bgcolor}
        focusTime={focusTime}
        startShortBreak={startShortBreak}
        startLongBreak={startLongBreak}
      />
      <Timer
        minutes={minutes}
        seconds={seconds}
        startTimer={startTimer}
        toggleStart={toggleStart}
        started={started}
        play={play}
        bgcolor={bgcolor}
      />
    </body>
  );
}

export default App;
