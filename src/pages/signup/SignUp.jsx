import React, { useRef, useEffect, useState } from "react";
import images from "../../images/images";
import "./signup.scss";
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";


const SignUp = () => {
  const pass = useRef(),
    cpass = useRef(),
    user = useRef();
  const navigate = useNavigate();

  const [data, setdata] = useState();
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
  const handleSignup = (e) => {
    e.preventDefault();
    const account = data.find((u) => {
      console.log(u);
      return u.user === user.current.value;
    });
    if (account) {
      alert("Tài khoản đã tồn tại");
    } else if (pass.current.value.length < 6) {
      alert("Mật khẩu quá ngắn");
    } else if (pass.current.value !== cpass.current.value){
        alert("Mật khẩu không khớp")
    } else{
        fetch("https://script.google.com/macros/s/AKfycbyXbqQ3S6WDZQaLynafuORm8CIxAFmIv_BGx2V0K4TAF4U4DRJLtAnijWRIfHCdJN5Cgg/exec?login="+user.current.value+"-"+pass.current.value, { mode: 'no-cors'});
        alert("Đăng kí thành công");
        navigate("/")
    }
  };
  return (
    <>
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
                                    mx-auto bg-slate-100 modal__signup rounded-xl bg-opacity-40
                                "
          >
            <form onSubmit={handleSignup} className="max-w-[600px] h-[400px]">
              <h1 className="text-black/80 text-3xl font-bold text-center pt-8 pb-4">
                English Web Quiz
              </h1>
              <div className="pl-8 mb-4">
                <label
                  htmlFor=""
                  className="text-lg font-semibold pr-8 translate-y-1/2 lb-text"
                >
                  Account
                </label>
                <input
                  className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                  placeholder="Account"
                  type="text"
                  ref={user}
                />
              </div>
              <div className="pl-8 mb-4">
                <label
                  htmlFor=""
                  className="text-lg font-semibold pr-5 translate-y-1/2 lb-text"
                >
                  Password
                </label>
                <input
                  className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                  placeholder="Enter 6 character or more"
                  type="password"
                  ref={pass}
                />
              </div>
              <div className="pl-8 mb-4">
                <label
                  htmlFor=""
                  className="text-lg font-semibold pr-8 translate-y-1/2 lb-text"
                >
                  Confirm
                </label>
                <input
                  className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                  placeholder="Confirm password"
                  type="password"
                  ref={cpass}
                />
              </div>
              <div className="w-full text-center mt-10">
                <button
                  type="submit"
                  className="bg-black/80 text-white text-xl w-[150px] py-3 rounded-lg hover:opacity-90 btn-signup"
                >
                  Sign Up
                </button>
              </div>
              <div className="pl-4 mt-1 text-end pr-10">
                <h4 className="text-black/50 font-semibold">
                  Already an account?
                  <Link
                    to="/"
                    className="underline underline-offset-1 text-sky-600  decoration-sky-600 hover:opacity-70"
                  >
                    Login now
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
