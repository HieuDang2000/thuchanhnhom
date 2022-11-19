import React from "react";
import images from "../../images/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./main.scss";

class Main extends React.Component {
  state = { data: {}, user: "", pass: "" };
  componentDidMount() {
    const APIUrl =
      "https://script.google.com/macros/s/AKfycbyXbqQ3S6WDZQaLynafuORm8CIxAFmIv_BGx2V0K4TAF4U4DRJLtAnijWRIfHCdJN5Cgg/exec";
    fetch(APIUrl)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
      event.preventDefault();
    const {data,user,pass} = this.state;
    const checkUserResult = data.find((u) => u.user === user);
    if (checkUserResult && checkUserResult.pass === pass) {
      alert("Login successful");
    //   useNavigate('http://localhost:3000/home');
    } 
    else {
      this.setState({ user: "", pass: "" });
      alert("Login Fail");
    }
  };
  render() {
    const { user, pass } = this.state;

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
              <form onSubmit={this.handleSubmit} className="max-w-[600px] h-[400px]">
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
                      className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                      placeholder="Account"
                      type="text"
                      name="user"
                      value={user}
                      onChange={this.handleChange}
                    />
                    <input
                      className="w-[420px] placeholder:text-slate-400 placeholder:text-start placeholder:font-semibold translate-y-1/2 font-semibold text-slate-500 rounded-lg p-[10px] mt-1 border-2 border-slate-500"
                      placeholder="Enter 6 character or more"
                      type="password"
                      name="pass"
                      value={pass}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="w-full text-center mt-14">
                  <button type="submit" className="bg-black/80 text-white text-xl w-[150px] py-3 rounded-lg hover:opacity-90 btn-login">
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
  }
}

export default Main;
