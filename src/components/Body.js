import React from "react";

function Body({ bgcolor ,startShortBreak,focusTime,startLongBreak}) {
  return (
    <body>
      <div className=" relative bg-white bg-opacity-20 w-[480px] h-[320px] mt-[35px]  mx-[32%] rounded-md">
        <div className=" flex absolute mt-[30px] left-20 right-20  ">
          <button onClick={focusTime}
            className={
              bgcolor == "bg-red-500"
                ? `bg-black bg-opacity-25 rounded text-slate-50 font-semibold px-[10px] py-[1px] `
                : `rounded text-slate-50 font-semibold px-[10px] py-[1px] `
            }
          >
            Pomodoro
          </button>
          <button onClick={startShortBreak} 
            className={
              bgcolor == "bg-blue-500"
                ? `bg-black bg-opacity-25 rounded text-slate-50 font-semibold px-[10px] py-[1px] `
                : `rounded text-slate-50 font-semibold px-[10px] py-[1px] `
            }
          >
            short break
          </button>
          <button  onClick={startLongBreak} 
            className={
              bgcolor == "bg-green-500"
                ? `bg-black bg-opacity-25 rounded text-slate-50 font-semibold px-[10px] py-[1px] `
                : `rounded text-slate-50 font-semibold px-[10px] py-[1px] `
            }
          >
            long break
          </button>
        </div>
      </div>
    </body>
  );
}

export default Body;
