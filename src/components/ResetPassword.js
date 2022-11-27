import React from "react";
import Logo from "./images/icon-white.png";

import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <body className=" h-screen bg-red-500  ">
      <div className="left-[40%] top-[10%] absolute ">
        <div className="flex items-center ">
          <img src={Logo} alt="logo" className="w-[59px] h-[59px] " />
          <Link to="/">
          <h1 className="text-4xl font-bold pl-1 text-white tracking-wide ml-[5px]">
            Pomofocus
          </h1></Link>
        </div>

        <p className=" text-slate-100 ml-[24.8%] mt-[3%] font-bold tracking-wider opacity-[.80]">
          Reset Password
        </p>

        {/* login form*/}
        <div className=" bg-white h-[180px] w-[350px] mx-[-10%] mt-[10%]  rounded-lg">
         
          {/* login inputs*/}

          <div className=" absolute mt-[5%] ml-[7%]  ">
            <label
              htmlFor="email"
              className="text-gray-400 font-semibold text-[13px]"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-200  text-gray-900 text-sm rounded focus:outline-0 block w-[300px] h-[45px] pl-[5%] text-[15px] mt-[7px]"
              placeholder="example@email.com"
              required
            />
          </div>
         
          <button className="flex items-center bg-black shadow-md border-neutral-100 border-solid border rounded-[4px]  absolute w-[300px] h-[50px] mt-[32%] ml-[7%] pl-[19%]  opacity-[.85]  hover:opacity-100">
            <p className=" tracking-wider text-white text-[15px] ml-[15%] ">
              {" "}
              Reset Password
            </p>
          </button>
        </div>
        <p className=" absolute text-slate-100 mt-[3%] ml-[21%]">
         Try other Methods
        </p>
        <Link
          to="/LoginPage"
          className="absolute mt-[10%] ml-[32%] underline text-white opacity-[.85]  hover:opacity-100 tracking-wider text-[13px] "
        >
          Login
        </Link>
      </div>
    </body>
  );
}

export default ResetPassword;
