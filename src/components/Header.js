import React from "react";
import Logo from "./images/icon-white.png";
import Config from "./images/config-white.png";
import Graph from "./images/graph-white.png";
import User from "./images/user-white.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex justify-around mx-[20%] ">
        <div className="flex mt-[15px] relative mr-[61%]">
          <img src={Logo} alt="logo" className="w-5 h-5" />
          <h1 className="text-xl font-bold pl-1 text-white tracking-wide">
            Pomofocus
          </h1>
        </div>

        <div className="flex mt-[17px] absolute left-[52%] ">
          <button className="flex bg-white bg-opacity-20 opacity-95 text-[14px] px-[9px] py-[5px] rounded">
            <img src={Graph} alt="logo" className="w-4 h-4 mt-[2px]" />
            <p className="capitalize text-slate-50 ml-[4px] ">report</p>
          </button>
          <button className="flex bg-white bg-opacity-20 opacity-95 text-[14px] px-[9px] py-[5px] rounded ml-2">
            <img src={Config} alt="logo" className="w-5 h-5" />
            <p className="capitalize text-slate-50 ml-[4px]  ">setting</p>
          </button>
          <button className="flex bg-white bg-opacity-20 opacity-95 text-[14px] px-[9px] py-[5px] rounded ml-2">
            <img src={User} alt="logo" className=" w-5 h-5" />
            <Link to="/LoginPage">
              <p className="capitalize text-slate-50 ml-[5px]  ">login</p>
            </Link>
          </button>
        </div>
      </div>
      <hr className="w-[46vw] ml-[26%]  mt-[15px]  border-t-neutral-800 opacity-20" />
    </div>
  );
}

export default Header;
