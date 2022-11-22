import React, { useEffect, useState } from "react";
import Unit from "../unnit/Unit";
import axios from "axios";
import { useNavigate, useLocation, Navigate } from "react-router-dom";


const ListUnit = () => {
  // const [data, setdata] = useState();
  // const dataLocal = JSON.parse(localStorage.getItem("data"));
  // const url =
  //   "https://script.google.com/macros/s/AKfycbxpVOXBPC9geWFveLX7k5MFvPYu30QrY2GU3IIIuZKajcBsYyHQ4nQ5DMG6uqe_9CBg/exec";
  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         data = json;
  //         console.log(json)
  //         console.log(data)
  //     });
  // }, []);
  // localStorage.setItem("data", JSON.stringify(data));

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { x } = await axios.get(`${url}`);
  //     console.log(x);

  //     x.map((item) => {
  //       const x1 =  <Unit item={item}/>;
  //       console.log(x1)
  //     })
  //   };
  //   fetchData();
  // }, []);
  console.log("hien thi thong tin user dang dang nhap");
  console.log(localStorage.getItem("user"));
  const units = JSON.parse(localStorage.getItem("units"));
  console.log(units);
  var str = localStorage.getItem("learned")
  str = str.split("-");
  return (
    <>
      {units.map((item) => {
        console.log(str);
        console.log(item.id);
        console.log(str[item.id-1])
        return <Unit item={item} key={item.id} check = {str[item.id-1] === 'n'}/>;
      })}
    </>
  );
};

export default ListUnit;
