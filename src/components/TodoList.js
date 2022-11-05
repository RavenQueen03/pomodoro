import React from "react";
import Options from "./Options.js";
import Dots from "./images/threedots-white.png";

function TodoList({
  options,
  setOptions,
  toggleOptions,
  optionsVisibility,
  setOptionsVisibility,
}) {
  return (
    <div>
      <h2 className="text-slate-50 font-semibold text-[20px] tracking-wide ml-[31.95%] mt-[25px]">
        Tasks
      </h2>

      <button
        onClick={toggleOptions}
        onMouseDown={() =>
          options
            ? setOptionsVisibility("invisible")
            : setOptionsVisibility("visible")
        }
        onMouseUp={() => console.log(optionsVisibility)}
        className=" absolute bg-white w-[33px] h-[33px] bg-opacity-20 opacity top-[77%] ml-[63.95%] rounded-[5px] "
      >
        <img src={Dots} alt="three-dots" className="w-[18px] ml-[7px]" />
      </button>
      <hr className="ml-[31.95%] mr-[30%]  h-[2px] w-[35%]  border-0 bg-slate-50  opacity-50 mt-[18px]"></hr>
      <div
        className={`relative bg-white w-[190px]  mt-[-9px]  ml-[52.5%] rounded-md pl-[10px] py-[10px] text-[#4f2b2d] text-[17px] ${optionsVisibility}`}
      >
        <p> Clear finished tasks</p>
        <p>Clear all tasks</p>
      </div>
    </div>
  );
}
export default TodoList;
