import Tippy from "@tippyjs/react/headless";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useNavigate, Navigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import useDebounce from "../useDebounce";
import "./header.scss";

const MENU_ITEMS = [
  {
    icon: <MdAccountCircle />,
    title: "Account",
    to: "/infor",
  },
  {
    icon: <CiLogout />,
    title: "Log out",
    to: "/",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const listContentUnit = JSON.parse(localStorage.getItem("units"));
  console.log(listContentUnit);
  const debounce = useDebounce(searchValue, 1000);

  useEffect(() => {
    var indexSearch = [];
    if (debounce != "" && debounce) {
      const found = listContentUnit.filter((p) => {
        var content = p.unit + p.voc + p.gra;
        console.log(content);
        content = content.search(debounce);
        console.log(p);
        console.log(debounce);
        console.log(content);
        if (content >= 0) {
          indexSearch.push(content);
          return true;
        }
        return false;
      });
      console.log(indexSearch);
      console.log(typeof found);
      // if (found == [])
      setSearchResult(
        found.map((p, idex) => ({
          id: p.id,
          unit: p.unit,
          content: p.unit + p.voc + p.gra,
          locate: indexSearch[idex],
        }))
      );
      // else setSearchResult([{unit:"No result found", content: ""}])
      console.log("da chinh sua");
    }
  }, [debounce]);

  console.log(searchResult);
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
  };
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const onChange = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const learned = localStorage.getItem("learned");
    console.log("da clear ");
    fetch(
      "https://script.google.com/macros/s/AKfycbyXbqQ3S6WDZQaLynafuORm8CIxAFmIv_BGx2V0K4TAF4U4DRJLtAnijWRIfHCdJN5Cgg/exec" +
        "?q=" +
        user +
        "-" +
        learned
    );
    localStorage.clear();
    navigate("/");
  };
  // if(searchResult[0]) console.log(searchResult[0].content.substr(searchResult[0].locate-15,30));
  const renderItems = () => {
    return MENU_ITEMS.map((item, i) => (
      <button
        key={i}
        className="w-full h-[50px] flex items-center justify-between bg-white text-base font-semibold"
      >
        <Link
          to={item.to}
          className="flex items-center justify-between w-full h-full p-3 mr-4"
        >
          <i className="text-xl">{item.icon}</i>
          {item.title}
        </Link>
      </button>
    ));
  };

  return (
    <div className="relative">
      <div className="fixed w-full h-12 bg-neutral-400 top-0 left-0 right-0 flex items-center justify-between px-6 z-1">
        <Link to="/home">
          <h1 className="text-xl font-medium text-black">English Web Quiz</h1>
        </Link>

        <Tippy
          visible={searchResult.length > 0 && showResult}
          interactive
          render={(attrs) => (
            <div className="w-[300px]" tabIndex="-1" {...attrs}>
              <div className="wrapper">
                {searchResult.map((item, index) => {
                  if (item.locate < 15) {
                    return (
                      <Link to={`/unit/${item.id}`}>
                        <div className="px-3 py-3 border-b-2 wrapper__item">
                          <h1>{item.unit}</h1>
                          <div>...{item.content.substr(0, 30)}...</div>
                        </div>
                      </Link>
                    );
                  }
                  else return (
                    <Link to={`/unit/${item.id}`}>
                      <div className="px-3 py-3 border-b-2 wrapper__item">
                        <h1>{item.unit}</h1>
                        <div>...{item.content.substr(item.locate - 15, 30)}...</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          onClickOutside={() => setShowResult(false)}
        >
          <div className="w-[300px] bg-white rounded-2xl flex justify-between">
            <input
              value={searchValue}
              type="text"
              placeholder="Search"
              spellCheck={false}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setShowResult(true)}
              className="h-10 p-4 ml-8 rounded-2xl outline-none placeholder:font-semibold font-semibold text-black input__search"
            />
            {!!searchValue && (
              <button className="mr-4" onClick={handleClear}>
                <AiFillCloseCircle />
              </button>
            )}
          </div>
        </Tippy>

        <div className="flex items-center h-full w-[120px] justify-around">
          <h3 className="text-black font-semibold">
            Hello {localStorage.getItem("user")}
          </h3>
          <Tippy
            onClickOutside={hide}
            interactive="true"
            visible={visible}
            placement="bottom-end"
            render={(attrs) => (
              <div
                className="h-[100px] w-[140px] menu__items z-1 border-2"
                tabIndex="-1"
                {...attrs}
              >
                <button className="w-full h-[50px] flex items-center justify-between bg-white text-base font-semibold">
                  <Link
                    to="/infor"
                    className="flex items-center justify-between w-full h-full p-3 mr-4"
                  >
                    <i className="text-xl">
                      <MdAccountCircle />
                    </i>
                    Account
                  </Link>
                </button>
                <button
                  key="2"
                  className="w-full h-[50px] flex items-center justify-between bg-white text-base font-semibold"
                  onClick={onChange}
                >
                  <Link
                    to="/"
                    className="flex items-center justify-between w-full h-full p-3 mr-4"
                  >
                    <i className="text-xl">
                      <CiLogout />
                    </i>
                    Log out
                  </Link>
                </button>
              </div>
            )}
          >
            <div onClick={visible ? hide : show}>
              <FiMenu className="text-2xl text-black hover:cursor-pointer" />
            </div>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default Header;
