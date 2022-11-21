import Header from "../../components/header/Header";
import "./home.scss";
import React from "react";
import ListUnit from "../../components/listUnit/ListUnit";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Home = () => {
  //   const [authenticated, setauthenticated] = useState(false);
  //   useEffect(() => {
  //     const loggedInUser = localStorage.getItem("authenticated");
  //     if (loggedInUser) {
  //       setauthenticated(true);
  //     }
  //   }, [authenticated]);
  //   if (!authenticated) {
  //     return <Navigate replace to="/" />;
  //   } else

  //   return (

  //     <div className="home">
  // const data =  useLocation().state;
  // const check = false;
  // check = data.check === null
  const user = localStorage.getItem("user");
  if (!user) return <Navigate replace to="/" />;
  var str = localStorage.getItem("learned");
  if (str) {
    str = str.split("-");
    var diemtb = 0,
      i = 0;
    str.map((s) => {
      if (s != "n") {
        diemtb += Number(s);
        i++;
      }
    });
    diemtb = diemtb / i;
  }
  if (user)
    return (
      <>
        <div className="bg-white w-full h-full">
          <div className="mt-12 pt-2 mr-3 ml-10 flex justify-between">
            <div className="content__unit">
              <ListUnit />
            </div>
            <div className="model__navbar">
              <div className="text-center pt-24">
                <h1 className="text-xl font-semibold">{user}</h1>
                <h1 className="text-xl font-semibold">
                  Learning progress: {i}/8
                </h1>
                <h1 className="text-xl font-semibold">
                  Average Point: {diemtb.toFixed(2)}/10
                </h1>
              </div>
              <div className="flex justify-center pt-5">
                <img
                  className="user__avatar"
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
        <Header />
      </>
    );
  return <Navigate replace to="/" />;
};

export default Home;
