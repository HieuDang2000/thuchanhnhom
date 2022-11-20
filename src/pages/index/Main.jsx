import React, { useRef, useEffect, useState } from "react";
import images from "../../images/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./main.scss";

// function test() {
//   const APIUrl =
//     "https://script.google.com/macros/s/AKfycbyXbqQ3S6WDZQaLynafuORm8CIxAFmIv_BGx2V0K4TAF4U4DRJLtAnijWRIfHCdJN5Cgg/exec";
//   fetch(APIUrl)
//     .then((res) => res.json())
//     .then((json) => {
//       data = {...data, json};
//     });
//     console.log(data);
// }
const Main = () => {
  // localStorage.setItem("user", "nouser")
  const [data, setdata] = useState();
  const [unit, setunit] = useState();
  localStorage.clear();
  const navigate = useNavigate();
  const pass = useRef(),
    user = useRef();

    useEffect(() => {
      const APIUrl =
    "https://script.google.com/macros/s/AKfycbyXbqQ3S6WDZQaLynafuORm8CIxAFmIv_BGx2V0K4TAF4U4DRJLtAnijWRIfHCdJN5Cgg/exec";
  fetch(APIUrl)
    .then((res) => res.json())
    .then((json) => {
      setdata(json);
    });
  console.log(data);
}, []);


  const Uniturl ="https://script.google.com/macros/s/AKfycbxpVOXBPC9geWFveLX7k5MFvPYu30QrY2GU3IIIuZKajcBsYyHQ4nQ5DMG6uqe_9CBg/exec";

  useEffect(() => {
    fetch(Uniturl)
    .then((res) => res.json())
    .then((json) => {
      setunit(json);
    });
  console.log(unit);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = data.find((u) => {
      console.log(u);
      return u.user === user.current.value;
    });
    if (account && account.pass === pass.current.value) {
      // setauth({user:username, check:true});
      alert("Login successful");
      localStorage.setItem("user", account.user);
      localStorage.setItem("units", JSON.stringify(unit));
      console.log(user);
      const units = JSON.parse(localStorage.getItem("units"));
      console.log(units);
      navigate("/home");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full absolute"
          src={images.backgroundwibu2}
          alt="background"
        />
        <div className="w-full h-full absolute bg-black/20 top-0 left-0 bottom-0"></div>
        <div className="absolute w-full px-4 translate-y-1/2 z-0 ctainer">
          <div
            className="
                                    max-w-[600px] h-[400px] 
                                    mx-auto bg-slate-100 modal__login rounded-xl bg-opacity-40
                                "
          >
            <form onSubmit={handleSubmit} className="max-w-[600px] h-[400px]">
              <h1 className="text-black/80 text-3xl font-bold text-center pt-10 pb-8">
                English Web Quiz
              </h1>
              <div className="mt-5 text-center flex">
                <div className="flex flex-col justify-between items-start pl-6">
                  <label
                    htmlFor=""
                    className="text-lg font-semibold pr-2 translate-y-1/2 lb-text"
                  >
                    Account
                  </label>
                  <label
                    htmlFor=""
                    className="text-lg font-semibold pr-2 translate-y-1/2 lb-text"
                  >
                    Password
                  </label>
                </div>
                <div className="flex flex-col ml-4">
                  <input
                    type="text"
                    name="Username"
                    ref={user}
                    className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                    placeholder="Account"
                  />
                  <input
                    name="password"
                    ref={pass}
                    className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold translate-y-1/2 font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                    placeholder="Enter 6 character or more"
                    type="password"
                  />
                </div>
              </div>
              <div className="w-full text-center mt-14">
                <button
                  type="submit"
                  className="bg-black/80 text-white text-xl w-[150px] py-3 rounded-lg hover:opacity-90 btn-login"
                >
                  Login
                </button>
              </div>
              <div className="pl-4 mt-5 text-end pr-10">
                <h4 className="text-black/50 font-semibold">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="underline underline-offset-1 text-sky-600  decoration-sky-600 hover:opacity-70"
                  >
                    Sign Up
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
