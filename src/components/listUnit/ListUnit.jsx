import React, { useEffect, useState } from "react";
import Unit from "../unnit/Unit";
import axios from "axios";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const listUnit = [
  {
    id: 1,
    name: "unit 1",
    overview: "Begin: Environment xxxxxxxxxxxx",
    check: true,
  },
  {
    id: 2,
    name: "unit 2",
    overview: "Begin: Environment xxxxxxxxxxxx",
    check: true,
  },
  {
    id: 3,
    name: "unit 3",
    overview: "Begin: Environment xxxxxxxxxxxx",
    check: false,
  },
  {
    id: 4,
    name: "unit 4",
    overview: "Begin: Environment xxxxxxxxxxxx",
    check: false,
  },
];
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
  const units = JSON.parse(localStorage.getItem("units"));
  console.log(units);
  return (
    <>
      {units.map((item) => {
        console.log(item.id);
        return <Unit item={item} />;
      })}
    </>
  );
};

export default ListUnit;
