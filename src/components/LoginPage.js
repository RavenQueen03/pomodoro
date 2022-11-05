import React from "react";
import Logo from "./images/icon-white.png";

function LoginPage() {
  return (
    <body className=" h-screen bg-red-500  ">
      <div className="left-[40%] top-[5%] absolute ">
        <div className="flex items-center ">
          <img src={Logo} alt="logo" className="w-[59px] h-[59px] " />
          <h1 className="text-4xl font-bold pl-1 text-white tracking-wide ml-[5px]">
            Pomofocus
          </h1>
        </div>

        <p className=" font-bold  text-slate-100 ml-[35%] mt-[10%]">Login</p>

        {/* login form*/}
        <div className=" bg-white h-[400px] w-[350px] mx-[-7%] mt-[10%]  rounded-lg">
        <h1>hii</h1></div>
      </div>
    </body>
  );
}

export default LoginPage;
