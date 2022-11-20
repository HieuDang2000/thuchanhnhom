import React, { useEffect, useState } from "react";
import HeaderContent from "../../components/headerContent/HeaderContent";
import { Link, useParams } from "react-router-dom";
import "./content.scss";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const listContentUnit = [
  {
    id: 1,
    name: "Unit 1",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "concept for lol" }],
    check: true,
  },
  {
    id: 2,
    name: "Unit 2",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "concept for lol" }],
    check: true,
  },
  {
    id: 3,
    name: "Unit 3",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "con chim 123" }],
    check: false,
  },
  {
    id: 4,
    name: "Unit 4",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "concept for lol" }],
    check: false,
  },
];

const Content = () => {
  const { id } = useParams();
  const user = localStorage.getItem("user");
  var data = {},
    vocs = [],
    gras = [];
  const linkQuiz = "/quiz/" + id;
  if (user) {
    console.log(id);
    const units = JSON.parse(localStorage.getItem("units"));
    data = units.find((unit) => {
      console.log(unit.id);
      return unit.id === Number(id);
    });
    console.log(data);
    //console.log(data)
    console.log(user);
    const vocs = data.voc.split("\n");
    const gras = data.gra.split("\n");
    console.log(vocs);
    console.log(gras);
  return (
    <>
      <HeaderContent id={id} />
      <div className="w-full mt-12 h-screen body__content">
        <div className="w-[98%] h-full bg-slate-50 mx-auto">
          <div>
            <h1 className="text-2xl font-semibold pl-3 pt-3">{data.unit}</h1>
          </div>
          <div className="h-[50px] text-black border-b-2 flex items-center justify-between">
            <p className="text-2xl pl-10">Introducing to {data.unit.split(id).join(" ").split(".")}</p>
            <div>
              <Link to={linkQuiz}>
                <button className="mr-40 w-[100px] py-1 px-6 bg-slate-400 font-semibold text-xl rounded-3xl">
                  Quiz
                </button>
              </Link>
            </div>
          </div>
          <b>Từ vựng</b>
          {vocs.map((voc) => (
            <div className="pl-4 pt-2">{voc}</div>
          ))}
          <hr
            style={{
              color: "#c9deeb",
              backgroundColor: "#c9deeb",
              height: 0.5,
              borderColor: "#c9deeb",
            }}
          />
          <div>
            <b>Ngữ pháp</b>
          </div>
          {gras.map((gra) => (
            <div className="pl-4 pt-2">{gra}</div>
          ))}
        </div>
      </div>
    </>
  );}
  return <Navigate replace to="/" />;
};

export default Content;
