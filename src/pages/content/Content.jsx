import React, { useEffect, useState } from "react";
import HeaderContent from "../../components/headerContent/HeaderContent";
import { json, Link, useParams } from "react-router-dom";
import "./content.scss";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Content = () => {
  const { id } = useParams();
  const user = localStorage.getItem("user");
  var data = {},
    vocs = [],
    gras = [];
  const linkQuiz = "/quiz/" + id;
  if (user) {
    // console.log(id);
    const units = JSON.parse(localStorage.getItem("units"));
    data = units.find((unit) => {
      // console.log(unit.id);
      return unit.id === Number(id);
    });
    console.log(data);
    //console.log(data)
    // console.log(user);
    const vocs = data.voc.split("\n");
    const gras = data.gra.split("\n");
    // console.log(vocs);
    // console.log(gras);

    var randomfromlocal = localStorage.getItem("randomQuizUnit");
    var rdfl = JSON.parse(randomfromlocal);
    console.log(id);
    // update obj in array
    // const obj2 = { unit: 1, check: true, random: random };
    // var obj1 = [{ unit: 1, check: false, random: random },{ unit: 2, check: false, random: random }];
    // var foundI = obj1.findIndex(x => x.unit == id)
    // obj1[foundI] = obj2;
    // console.log(obj1);
    // ran = JSON.stringify([{,{unit: 2, check:false, random: [1,2,3,4,5]}}]);
    //find the check of current unit from localStorage
    var rdf = rdfl.find((r) => r.unit == id);
    // if check is true, no impliment, otherwise set new random value to localStorage
    var random = [], result = [];
    var i = 0,
      order = 0,
      num = 0,
      subnum = 0;
    if (!rdf) {
      // add new
      console.log("add new");
      random = [];
      i = 0;
      while (i < 5) {
        num = Math.floor(Math.random() * 10);
        if (!random.find((n) => n == num)) {
          order = Math.floor(Math.random() * 4);
          var subrandom = [];
          subrandom.push(num);
          result.push(num);
          for (var j = 0; j < 4; ) {
            subnum = Math.floor(Math.random() * 10);
            if (!subrandom.find((n) => n == subnum)) {
              if (j == order) {
                subrandom.push(num);}
              else subrandom.push(subnum);
              j++;
            }
          }
          random.splice(i, 0, subrandom);
          // console.log(random);
          i++;
        }
      }
      const obj2 = { unit: id, check: false, random: random, result: result, pass: false};
      localStorage.setItem("randomQuizUnit", JSON.stringify([...rdfl, obj2]));
      console.log(obj2);
    } else {
      console.log("renew not oke");
      // if check is false, rerender
      if (!rdf.check) {
        console.log("renew oke");
        // var arry = [9,8,7];
        // var sub_array_1 = [1,2,2,2,2];
        // var arry1 = arry.splice(1,0,sub_array_1); console.log(arry[1]);
        random = [];
        var result = [];
        i = 0;
        while (i < 5) {
          num = Math.floor(Math.random() * 10);
          if (!random.find((n) => n == num)) {
            order = Math.floor(Math.random() * 4);
            var subrandom = [];
            subrandom.push(num);
            result.push(num);
            // console.log(subrandom);
            for (var j = 0; j < 4; ) {
              subnum = Math.floor(Math.random() * 10);
              if (!subrandom.find((n) => n == subnum)) {
                if (j == order) subrandom.push(num);
                else subrandom.push(subnum);
                j++;
              }
            }
            random.splice(i, 0, subrandom);
            console.log(random);
            i++;
          }
        }
        const obj2 = { unit: id, check: false, random: random, result: result, pass: false };
        var foundI = rdfl.findIndex((x) => x.unit == id);
        rdfl[foundI] = obj2;
        localStorage.setItem("randomQuizUnit", JSON.stringify(rdfl));
      }
    }
    console.log(JSON.parse(localStorage.getItem("randomQuizUnit")));
    return (
      <>
        <HeaderContent id={id} />
        <div className="w-full mt-12 h-full body__content">
          <div className="w-[98%] h-full bg-slate-50 mx-auto">
            <div>
              <h1 className="text-2xl font-semibold pl-3 pt-3">{data.unit}</h1>
            </div>
            <div className="h-[50px] text-black border-b-2 flex items-center justify-between">
              <p className="text-2xl pl-10">
                Introducing to {data.unit.split(id).join(" ").split(".")}
              </p>
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
    );
  }
  return <Navigate replace to="/" />;
};

export default Content;
