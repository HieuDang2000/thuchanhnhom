import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./quiz.scss";
import { MdViewArray } from "react-icons/md";

const listContentUnit = [
  {
    id: 1,
    name: "Unit 1",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "concept for lol" }],
    quiz: [
      {
        id: 1,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 2,
        cauhoi: "dau bui chim quan",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 3,
        cauhoi: "dau bui chim khanh",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 4,
        cauhoi: "dau bui chim khanh",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 5,
        cauhoi: "dau bui chim khanh",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
    ],
    check: true,
  },
  {
    id: 2,
    name: "Unit 2",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "concept for lol" }],
    quiz: [
      {
        id: 1,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 2,
        cauhoi: "dau bui chim quan",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 3,
        cauhoi: "dau bui chim khanh",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
    ],
    check: true,
  },
  {
    id: 3,
    name: "Unit 3",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "con chim 123" }],
    quiz: [
      {
        id: 1,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 2,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 3,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
    ],
    check: false,
  },
  {
    id: 4,
    name: "Unit 4",
    overview: "Begin: Environment xxxxxxxxxxxx",
    contents: [{ content: "introduction" }, { content: "concept for lol" }],
    quiz: [
      {
        id: 1,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 2,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
      {
        id: 3,
        cauhoi: "dau bui chim cut",
        dapanA: "ddddd",
        dapanB: "sdsadsa",
        dapanC: "dwdqdwqq",
        dapanD: "css",
        dapanDung: "css",
      },
    ],
    check: false,
  },
];

const Quiz = ({seconds=600}) => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      localStorage.setItem("timeleft", timeLeft);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  const { id } = useParams();
  //console.log(id);
  const data = listContentUnit.find((item) => item.id === Number(id));
  return (
    <>
      <Header />
      <div className="w-full mt-12 h-full body__content">
        <div className="w-[98%] h-full bg-slate-50 mx-auto">
          <div>
            <h1 className="text-2xl font-semibold pl-3 pt-3">{data.name}</h1>
          </div>
          <div className="h-[50px] text-black border-b-2 flex items-center justify-between">
            <p className="text-2xl pl-10">{data.overview} </p>
            <p className="text-2xl pl-10">Time Left: {Math.floor(timeLeft/60)}:{timeLeft%60} </p>
            <div>
              <Link>
                <button className="mr-40 w-[100px] py-1 px-4 mx-auto bg-slate-400 font-semibold text-xl rounded-3xl">
                  Submit
                </button>
              </Link>
            </div>
          </div>
          <div>
            {data.quiz.map((item, id) => (
              <div key={id} className="py-4 px-6">
                <h2>
                  Question {item.id}: {item.cauhoi}
                </h2>
                <form action="" className="flex flex-col">
                  <div className="w-[40%] bg-slate-300 flex items-center py-4 my-1 rounded-2xl">
                    <input
                      className="mx-2"
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label htmlFor="" className="text-lg text-center h-full">
                      cccccc
                    </label>
                  </div>
                  <div className="w-[40%] bg-slate-300 flex items-center py-4 my-1 rounded-2xl">
                    <input
                      className="mx-2"
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label htmlFor="" className="text-lg">
                      cccccc
                    </label>
                  </div>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
