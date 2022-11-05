import React, { useState, useEffect } from "react";
import Next from "./images/next-white3.png";

function Timer({
  minutes,
  seconds,
  toggleStart,
  started,
  play,
  buttonColor,
  visibility,
  setVisibility,
  bgcolor,
  focusTime,
  startShortBreak,
  startLongBreak,
}) {
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  let s = !started;

  return (
    <div className="absolute top-[25%] left-[38%]">
      <h1 className="text-9xl text-white font-bold">
        {timerMinutes}:{timerSeconds}
      </h1>
      <button
        onClick={toggleStart}
        onMouseDown={play}
        onMouseUp={() =>
          started ? setVisibility("invisible") : setVisibility("visible")
        }
        className={`bg-white ${buttonColor}  font-semibold  mt-[10%] mx-[17%] text-2xl tracking-wide uppercase px-[70px] py-[14px] rounded border-b-4`}
      >
        {!started ? "START" : "STOP"}
      </button>
      <button
        className={` absolute w-[17px] top-[80%] w-[70px] left-[87%]  ${visibility} `}
        onClick={() =>
          window.confirm(
            "Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)"
          )
            ? bgcolor == "bg-red-500"
              ? startShortBreak()
              : bgcolor == "bg-blue-500"
              ? startLongBreak()
              : ""
            : ""
        }
      >
        {" "}
        <img src={Next} alt="next" />{" "}
      </button>
    </div>
  );
}
export default Timer;
