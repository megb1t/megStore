import React from "react";
import { gameData } from "./pageData/gameData";

function Home() {
  document.title = "megStore";

  const [showSuccess, setSuccess] = React.useState(false);

  const [showName, setName] = React.useState();

  const cartName = (gameName) => {
    setSuccess(true);

    setName(gameName);
  };

  if (showSuccess) {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  return (
    <>
      {showSuccess ? (
        <div
          id="addtocart"
          className="border flex justify-between bg-green-700 items-center h-12"
        >
          <h4 className="mx-1 text-xs md:text-base text-white">
            Success! {showName} Added to cart
          </h4>

          <button
            className="border mx-2 md:text-base px-1.5 py-1  rounded text-xs bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300"
            onClick={() => {
              setSuccess(!showSuccess);
            }}
          >
            Close
          </button>
        </div>
      ) : null}

      <div className="mx-1 grid grid-cols-3 justify-center">
        {gameData.map((items, index) => {
          return (
            <div
              id="choco"
              key={index}
              className="flex flex-col mt-8 my-4 mb-4 items-center text-center"
            >
              <img
                className="w-20 md:w-40 hover:bg-gray-200 hover:scale-125 hover:duration-100 rounded  "
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
              <button
                id="choco"
                // onClick={() => {
                //   setSuccess(!showSuccess);
                // }}
                onClick={() => {
                  cartName(items.name);
                }}
                key={index}
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs px-3 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 lg:px-12"
              >
                <svg
                  className="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
