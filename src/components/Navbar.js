import React from "react";
import megStoreLogo from "./images/hp.jpg";
import { Link } from "react-router-dom";

import { Buttons } from "./buttons";

function Navbar() {
  const [navStatus, setnavStatus] = React.useState(false);
  return (
    <>
      <header className="border-2">
        <div className="m-1 flex justify-between">
          <div className="flex">
            <button
              id="toggleButton"
              className="toggle-sidenav mx-2 mr-5 text-xl font-bold md:hidden"
              onClick={() => {
                setnavStatus(!navStatus);
              }}
            >
              &#8801;
            </button>
            <Link to="/">
              <img
                className="w-10 cursor-pointer hidden md:flex mx-1 mr-3"
                src={megStoreLogo}
                alt="megStore"
              ></img>
            </Link>
            <Link to="/">
              <h1 className="font-mono text-sm md:text-2xl mr-2 border bg-blue-300 rounded p-1.5 cursor-pointer">
                megStore
              </h1>
            </Link>
            <div className="flex max-[768px]:hidden">
              {Buttons.map((items, index) => {
                return (
                  <Link key={index} to={items.path}>
                    <button key={index} className="p-2 px-5">
                      {" "}
                      {items.name}{" "}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="Search flex">
            <input
              className="border-2 relative p-0.5 md:p-1.5 mr-1 md:mr-2 w-32 md:w-auto text-gray-900 rounded text-xs md:text-base"
              type="search"
              placeholder="Search a game"
            />
            <button
              className="border md:text-base p-1.5 rounded text-xs bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </header>

      {navStatus ? (
        <div className="absolute bg-white border w-32  h-screen flex-col items-start md:hidden">
          {Buttons.map((items, index) => {
            return (
              <Link key={index} to={items.path}>
                {" "}
                <button
                  key={index}
                  className="py-2  text-sm px-2 my-2 "
                  onClick={() => {
                    setnavStatus(!navStatus);
                  }}
                >
                  {items.name}
                </button>
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
