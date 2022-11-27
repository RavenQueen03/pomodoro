import React, { useState, useEffect } from "react";

import useSound from "use-sound";
import boopSfx from "./sounds/button-press.wav";

import Body from "./components/Body";
import Timer from "./components/Timer";
import Next from "./components/images/next-white3.png";
import addNotification from "react-push-notification";
import { Notifications } from "react-push-notification";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Header from "./components/Header";

function HomePage() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [bgcolor, setbgColor] = useState("bg-red-500");
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("Time to focus !");
  const [buttonColor, setButtonColor] = useState("text-red-500");
  const [visibility, setVisibility] = useState("invisible");
  const [options, setOptions] = useState(false);
  const [optionsVisibility, setOptionsVisibility] = useState("invisible");

  function startTimer() {
    console.log("started");
    setStarted(true);

    const current = new Date();
    const time = current.toLocaleTimeString({
      hour: "2-digit",
      minute: "2-digit",
      second: false,
      hour12: false,
    });
    if (minutes === 0 && seconds === 0 && bgcolor == "bg-red-500") {
      setStarted(false);
      setbgColor("bg-blue-500");
      setMinutes(1);
      setSeconds(0);
      setCount(count + 1);
      setMessage("Time for a break !");
      setButtonColor("text-blue-500");
      setVisibility("invisible");

      addNotification({
        title: "Time for a break !",
        message: time,
        theme: undefined,
        native: true, // when using native, your OS will handle theming.
      });
    }

    if (minutes === 0 && seconds === 0 && bgcolor == "bg-blue-500") {
      setStarted(false);
      setbgColor("bg-red-500");
      setMinutes(1);
      setSeconds(0);
      setCount(count + 1);
      setMessage("Time for a break !");
      setVisibility("invisible");
      setButtonColor("text-red-500");

      addNotification({
        title: "Time for a break !",
        message: time,
        theme: undefined,
        native: true, // when using native, your OS will handle theming.
      });
    }

    if (
      count === 3 &&
      minutes === 0 &&
      seconds === 0 &&
      bgcolor == "bg-red-500"
    ) {
      setStarted(false);
      setbgColor("bg-green-500");
      setMinutes(1);
      setSeconds(0);
      setCount(1);
      setButtonColor("text-green-500");
      setVisibility("invisible");

      addNotification({
        title: "Time for a break !",
        message: time,
        theme: undefined,
        native: true, // when using native, your OS will handle theming.
      });
    }

    if (minutes === 0 && seconds === 0 && bgcolor == "bg-green-500") {
      setStarted(false);
      setbgColor("bg-red-500");
      setMinutes(1);
      setSeconds(0);
      setVisibility("invisible");
      console.log(count);

      addNotification({
        title: "Time to focus!",
        message: time,
        theme: undefined,
        native: true, // when using native, your OS will handle theming.
      });
    }
  }

  function focusTime() {
    setMinutes(1);
    setSeconds(0);
    setStarted(false);
    setbgColor("bg-red-500");
    setButtonColor("text-red-500");
    setMessage("Time to focus !");
    setVisibility("invisible");
  }

  function startShortBreak() {
    setStarted(false);

    setMinutes(5);
    setSeconds(0);

    setButtonColor("text-blue-500");
    setbgColor("bg-blue-500");
    setMessage("Time for a break !");
    setVisibility("invisible");
  }

  function startLongBreak() {
    setMinutes(15);
    setSeconds(0);
    setStarted(false);
    setButtonColor("text-green-500");
    setbgColor("bg-green-500");
    setMessage("Time for a break !");
    setVisibility("invisible");
  }

  const [play] = useSound(boopSfx, { volume: 0.25 });
  useEffect(() => {
    let interval = null;
    if (started) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!started && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [started, seconds]);

  const toggleStart = () => {
    setStarted(!started);
  };

  const toggleOptions = () => {
    setOptions(!options);
  };

  return (
    <body className={`h-screen ${bgcolor}`}>
      <Header />
      <Body
        bgcolor={bgcolor}
        focusTime={focusTime}
        startShortBreak={startShortBreak}
        startLongBreak={startLongBreak}
        count={count}
        message={message}
      />
      <Timer
        minutes={minutes}
        seconds={seconds}
        startTimer={startTimer}
        toggleStart={toggleStart}
        started={started}
        play={play}
        bgcolor={bgcolor}
        buttonColor={buttonColor}
        setVisibility={setVisibility}
        visibility={visibility}
        focusTime={focusTime}
        startShortBreak={startShortBreak}
        startLongBreak={startLongBreak}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <TodoList
        setOptions={setOptions}
        options={options}
        toggleOptions={toggleOptions}
        optionsVisibility={optionsVisibility}
        setOptionsVisibility={setOptionsVisibility}
      />
      <Todo  bgcolor={bgcolor} />
    </body>
  );
}

export default HomePage;
