import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./infor.scss";

const Infor = () => {
    const user = localStorage.getItem("user");
  const pass = useRef(),
    ho = useRef(),
    ten = useRef(),
    email = useRef(),
    sdt = useRef(),
    bday = useRef(),
    cpass = useRef();

  const changeInfo = () => {
    console.log("da change");
    const ho1 = ho.current.value;
    const ten1 = ten.current.value;
    const email1 = email.current.value;
    const sdt1 = sdt.current.value;
    const bday1 = bday.current.value;
    const pass1 = pass.current.value;
    const cpass1 = cpass.current.value;
    if (!(ho1 && ten1 && email1 && sdt1 && bday1)) {
      alert("Vui lòng điền đầy đủ thông tin");
    } else if (pass1.length > 5){
      if (pass1 == cpass1) {
        alert("Đổi thông tin thành công");
        console.log(user, pass1)
        fetch("https://script.google.com/macros/s/AKfycbyXbqQ3S6WDZQaLynafuORm8CIxAFmIv_BGx2V0K4TAF4U4DRJLtAnijWRIfHCdJN5Cgg/exec"+"?chpass="+user+"-"+pass1);
      } else {
        alert("Mật khẩu không trùng");
      }
    }
    else alert("Mật khẩu không đủ độ dài")
  };
  return (
    <>
      <div className="bg-slate-300 h-screen w-full relative">
        <div className="w-full h-full absolute bg-black/20 top-0 left-0 bottom-0"></div>
        <Link
          to="/home"
          className="absolute bg-black px-5 py-2 link__home my-2 text-white rounded-xl font-semibold"
        >
          Home
        </Link>
        <div className="absolute w-full px-4 mt-14">
          <div className="max-w-[900px] h-[580px] mx-auto bg-white rounded-xl">
            <h1 className="py-3 pl-6 text-xl border-b-2 thongtin__account">
              Account Details
            </h1>
            <form onSubmit={changeInfo} className="text-center">
              <div className="py-2 text-center">
                <h1 className="font-semibold text-left w-[850px] h1__user">
                  Username
                </h1>
                <input
                  className="w-[850px] text-slate-500 rounded-lg p-[10px] input__user"
                  placeholder={user}
                  type="text"
                  readOnly
                />
              </div>
              <div className="w-[850px] flex justify-between mx-auto">
                <div className="py-2">
                  <h1 className="font-semibold text-left w-[415px] mb-1">
                    First name
                  </h1>
                  <input
                    className="w-[415px] text-slate-500 rounded-lg p-[10px] input__fname"
                    placeholder="input First name"
                    type="text"
                    ref={ho}
                  />
                </div>
                <div className="py-2">
                  <h1 className="font-semibold text-left w-[415px] mb-1">
                    Last name
                  </h1>
                  <input
                    className="w-[415px] text-slate-500 rounded-lg p-[10px] input__lname"
                    placeholder="input Last name"
                    type="text"
                    ref={ten}
                  />
                </div>
              </div>
              <div className="py-2 text-center">
                <h1 className="font-semibold text-left w-[850px] h1__user">
                  Email
                </h1>
                <input
                  className="w-[850px] text-slate-500 rounded-lg p-[10px] input__user"
                  placeholder="input Email"
                  type="text"
                  ref={email}
                />
              </div>
              <div className="w-[850px] flex justify-between mx-auto">
                <div className="py-2">
                  <h1 className="font-semibold text-left w-[415px] mb-1">
                    Phone number
                  </h1>
                  <input
                    className="w-[415px] text-slate-500 rounded-lg p-[10px] input__fname"
                    placeholder="0999099099"
                    type="number"
                    ref={sdt}
                  />
                </div>
                <div className="py-2">
                  <h1 className="font-semibold text-left w-[415px] mb-1">
                    Birthday
                  </h1>
                  <input
                    className="w-[415px] text-slate-500 rounded-lg p-[10px] input__lname"
                    min="2002-01-01"
                    type="date"
                    ref={bday}
                  />
                </div>
              </div>
              <div className="w-[850px] flex justify-between mx-auto">
                <div className="py-2">
                  <h1 className="font-semibold text-left w-[415px] mb-1">
                    Password
                  </h1>
                  <input
                    className="w-[415px] text-slate-500 rounded-lg p-[10px] input__fname"
                    placeholder="input New Password"
                    type="password"
                    ref={pass}
                  />
                </div>
                <div className="py-2">
                  <h1 className="font-semibold text-left w-[415px] mb-1">
                    New Password
                  </h1>
                  <input
                    className="w-[415px] text-slate-500 rounded-lg p-[10px] input__lname"
                    placeholder="Confirm Password"
                    type="password"
                    ref={cpass}
                  />
                </div>
              </div>
              <button
                className="py-2 bg-black/80 rounded-xl px-2 mt-4 text-white font-semibold hover:opacity-60"
                type="submit"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infor;
