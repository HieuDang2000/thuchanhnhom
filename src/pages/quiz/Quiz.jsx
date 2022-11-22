import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./quiz.scss";
import { MdViewArray } from "react-icons/md";

const Quiz = () => {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) {
      submitAnswer();
      return;
    }

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
  //get question
  const units = JSON.parse(localStorage.getItem("units"));
  const unit = units.find((item) => item.id === Number(id));
  // handle string
  var take1 = unit.voc.split("(a)").join(",");
  take1 = take1.split("(n)").join(",");
  take1 = take1.split("(v)").join(",");
  take1 = take1.split("(adv)").join(",");
  take1 = take1.split("(adj)").join(",");
  take1 = take1.split("(exp)").join(",");
  take1 = take1.split("\n").join(",");
  take1 = take1.split(",");
  console.log(take1);
  // even is english, odd is vietnamese
  const english = [],
    vn = [];
  for (var i = 0; i < take1.length; i++) {
    if (i % 2 == 0) english.push(take1[i]);
    else vn.push(take1[i]);
  }
  console.log(english);
  console.log(vn);
  //get question random and refuse change
  var randomIndex = JSON.parse(localStorage.getItem("randomQuizUnit"));
  var foundI = randomIndex.findIndex((x) => x.unit == id);
  console.log(randomIndex[foundI]);
  var change = randomIndex[foundI];
  change.check = true;
  console.log(change);
  randomIndex[foundI] = change;
  localStorage.setItem("randomQuizUnit", JSON.stringify(randomIndex));
  var random = change.random;
  console.log(random);

  var [c, setc] = useState([99, 99, 99, 99, 99]);
  var subc = [];
  const submitAnswer = () => {
    var score = 0;
    c.map((c, i) => {
      if (change.random[i][c] == change.result[i]) score += 2;
    });
    if (score > 5) {
      random.pass = true;
      change.check = false;
      console.log(random);
      localStorage.setItem("randomQuizUnit", JSON.stringify(random));
      //lưu vào local giá trị pass
      randomIndex[foundI] = change;
      console.log(change)
      console.log(randomIndex);
      localStorage.setItem("randomQuizUnit", JSON.stringify(randomIndex));
      var str = localStorage.getItem("learned");
      str = str.split("-");
      str[id-1] = score;
      str = str.join("-");
      localStorage.setItem("learned", str);
      console.log(localStorage.getItem("learned"));
      //chuyển trang
      alert("Chúc mừng bạn được: " + score + "điểm \nBạn đã qua bài");
      navigate("/home");    
    } else {
      //lưu vào local giá trị pass
      change.check = false;
      randomIndex[foundI] = change;
      console.log(change)
      localStorage.setItem("randomQuizUnit", JSON.stringify(randomIndex));
      var str = localStorage.getItem("learned");
      str = str.split("-");
      str[id-1] = 'n';
      str = str.join("-");
      localStorage.setItem("learned", str);
      console.log(localStorage.getItem("learned"));
      //chuyển trang
      alert("Wow, bạn đạt được: " + score + "điểm \nBạn đã Rớt");
      navigate("/home");
    }
  };
  console.log(randomIndex);
  //c[Number(e.target.value)] = Number(e.target.id)
  const onChange = (e) => {
    subc = c;
    subc[Number(e.target.value)] = e.target.id;
    setc(subc);

    console.log("onchange" + e.target.id);
    console.log(c);
  };
  return (
    <>
      <Header />
      <div className="w-full mt-12 h-full body__content">
        <div className="w-[98%] h-full bg-slate-50 mx-auto">
          <div>
            <h1 className="text-2xl font-semibold pl-3 pt-3">{unit.unit}</h1>
          </div>
          <div className="h-[50px] text-black border-b-2 flex items-center justify-between">
            <p className="text-2xl pl-10">{unit.unit} </p>
            <p className="text-2xl pl-10">
              Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}{" "}
            </p>
            <div>
              <Link to="/home">
                <button
                  type="submit"
                  className="mr-40 w-[100px] py-1 px-4 mx-auto bg-slate-400 font-semibold text-xl rounded-3xl"
                  onClick={submitAnswer}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
          <div>
            {random.map((item, id) => (
              <div key={id} className="py-4 px-6">
                <h2>
                  Question {id + 1}: Nghĩa của từ {english[item[0]]} là
                </h2>
                <form className="flex flex-col">
                  <div className="w-[60%] bg-slate-300 flex items-center py-4 my-1 rounded-2xl">
                    <div className="w-[25%]">
                      <input
                        className="mx-2"
                        type="radio"
                        id="1"
                        name="fav_language"
                        value={id}
                        onChange={onChange}
                      />
                      <label htmlFor="" className="text-lg text-center h-full">
                        {vn[item[1]]}
                      </label>
                    </div>
                    <div className="w-[25%]">
                      <input
                        className="mx-2 "
                        type="radio"
                        id="2"
                        name="fav_language"
                        value={id}
                        onChange={onChange}
                      />
                      <label htmlFor="" className="text-lg">
                        {vn[item[2]]}
                      </label>
                    </div>
                    <div className="w-[25%]">
                      <input
                        className="mx-2"
                        type="radio"
                        id="3"
                        name="fav_language"
                        value={id}
                        onChange={onChange}
                      />
                      <label htmlFor="" className="text-lg">
                        {vn[item[3]]}
                      </label>
                    </div>
                    <div className="w-[25%]">
                      <input
                        className="mx-2"
                        type="radio"
                        id="4"
                        name="fav_language"
                        value={id}
                        onChange={onChange}
                      />
                      <label htmlFor="" className="text-lg">
                        {vn[item[4]]}
                      </label>
                    </div>
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
