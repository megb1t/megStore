import React from "react";
import { gameData } from "./pageData/gameData";
function Home() {
  return (
    <>
      <div className="mx-1 grid grid-cols-3 justify-center">
        {gameData.map((items, index) => {
          return (
            <div
              key={index}
              className="flex flex-col mt-8 my-4 mb-10 items-center text-center"
            >
              <img
                className="w-40 hover:bg-gray-200 hover:scale-125 hover:duration-300 rounded  "
                key={index}
                src={items.image}
                alt="something"
              ></img>
              <h5 className="text-xs mt-2 mb-1 md:text-base text-gray-600">
                {items.price}
              </h5>
              <h4 className="md:text-lg mb-2 text-sm">{items.name}</h4>
              <h5 className="text-xs md:text-base font-bold">
                {items.edditon}
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
