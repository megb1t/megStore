import React from "react";
import megStoreLogo from "./images/hp.jpg";
import { Link } from "react-router-dom";

import { Buttons } from "./buttons";

function Navbar() {
  const [navStatus, setnavStatus] = React.useState(false);
  return (
    <>
      <header className="border border-indigo-500/50">
        <div className="m-1 flex justify-between">
          <div className="flex">
            <button
              id="toggleButton"
              className="cursor-pointer toggle-sidenav mx-2 mr-5 text-xl font-bold md:hidden"
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
              <h1 className="font-mono text-sm md:text-2xl mr-2 border border-indigo-500/50 bg-blue-300 rounded p-1.5 cursor-pointer">
                megStore
              </h1>
            </Link>
            <div className=" flex max-[768px]:hidden">
              {Buttons.map((items, index) => {
                return (
                  <Link key={index} to={items.path}>
                    <button key={index} className="cursor-pointer p-2 px-5">
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
              className="border-1 border-indigo-500/50 relative p-0.5 md:p-1.5 mr-1 md:mr-2 w-32 md:w-auto text-gray-900 rounded text-xs md:text-base"
              type="search"
              placeholder="Search a game"
            />
            <button
              className="border border-indigo-500/50 md:text-base p-1.5 rounded text-xs bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer "
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </header>

     
        <div className={navStatus?"bg-white border-t border-b border-indigo-500/50 h-12 w-screen flex transition-display items-center  duration-200 ease-in-out justify-around transition-height duration-200 ease-in md:hidden":"h-0 transition-height duration-200 ease-out"}>
          {Buttons.map((items, index) => {
            return (
              <Link key={index} to={items.path}>
                {" "}
                <button
                  key={index}
                  className={navStatus?"py-2 border-indigo-500/50 cursor-pointer text-sm px-2 my-2":"hidden"}
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
    </>
  );
}

export default Navbar;
