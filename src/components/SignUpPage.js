import React from "react";
import Logo from "./images/icon-white.png";
import GoogleLogo from "./images/g-logo.png";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <body className=" h-screen bg-red-500  ">
      <div className="left-[40%] top-[10%] absolute ">
        <div className="flex items-center ">
          <img src={Logo} alt="logo" className="w-[59px] h-[59px] " />
          <Link to="/">
            <h1 className="text-4xl font-bold pl-1 text-white tracking-wide ml-[5px]">
              Pomofocus
            </h1>
          </Link>
        </div>

        <p className=" text-slate-100 ml-[24%] mt-[3%] font-bold tracking-wider opacity-[.80]">
          Create Account
        </p>

        {/* login form*/}
        <div className=" bg-white h-[320px] w-[350px] mx-[-10%] mt-[10%]  rounded-lg">
          <button className="flex items-center bg-white shadow-md border-neutral-100 border-solid border rounded-[4px]  absolute w-[300px] h-[50px] mt-[7%] ml-[7%] pl-[19%]  opacity-[.85]  hover:opacity-100">
            <img src={GoogleLogo} alt="GoogleLogo" className="w-[19px]" />
            <p className="font-bold tracking-wider text-neutral-500 text-[14px] ml-[6px] ">
              {" "}
              Login with Google
            </p>
          </button>
          <div className="inline-flex justify-center items-center w-full absolute mt-[20%]">
            <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute left-1/2 px-3 font-medium text-neutral-500 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
          {/* login inputs*/}

          <div className=" absolute mt-[37%] ml-[7%]  ">
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

          <button className="flex items-center bg-black shadow-md border-neutral-100 border-solid border rounded-[4px]  absolute w-[300px] h-[50px] mt-[70%] ml-[7%] pl-[19%]  opacity-[.85]  hover:opacity-100">
            <p className=" tracking-wider text-white text-[14px] ml-[7%] ">
              {" "}
              Sign up with Email
            </p>
          </button>
        </div>
        <p className=" absolute text-slate-100 mt-[3%] ml-[15%]">
          Already have An account ?
        </p>
        <Link
          to="/LoginPage"
          className="absolute mt-[10%] ml-[35%] underline text-white opacity-[.85]  hover:opacity-100 tracking-wider text-[13px] "
        >
          Log in
        </Link>
      </div>
    </body>
  );
}

export default SignUpPage;
