import React from 'react';
import { gameData } from "./pageData/gameData";
import Cart from '../components/Cart';

function discover() {
    document.title = "megStore-Discover";
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

  


  const [showCart, setCart] = React.useState(0);

  const [cartItems, setCartItems] = React.useState([]); // State to hold cart items


  const handleAddToCart = (productToAdd) => {
    // Add the product to the cartItems array in state
    setCartItems(prevCartItems => [...prevCartItems, productToAdd]);
  };

    return (
        <>

        
         <div className='flex flex-col realtive'>
          <div className='self-end absolute'>
                {showCart? <Cart items={cartItems}/>: null}
            </div>

            <div
                id="addtocart"
                className= {showSuccess? "ml-1 mr-1 flex justify-between transition-height duration-200 ease-in-out bg-green-700 items-center h-12" : "h-0 transition-height duration-200 ease-in-out"}
              >
                <h4 className="mx-1 text-xs md:text-base text-white">
                  Success! {showName} Added to cart
                </h4>
      
                {/* <button
                  className="border mx-2 md:text-base px-1.5 py-1  rounded text-xs bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300"
                  onClick={() => {
                    setSuccess(!showSuccess);
                  }}
                >
                  Close
                </button> */}
              </div>
                <div className="mx-1 grid grid-cols-3 justify-center">
                    {gameData.map((items, index) => {
                        return (
                            <div
                                id="choco"
                                key={index}
                                className="flex hover:bg-gray-100 flex-col mt-6 pb-5 my-4 mb-4 items-center text-center"
                            >
                                <img
                                    className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded  "
                                    src={items.image}
                                    alt="something"
                                ></img>
                                <h5 className="text-[0.8rem] mt-2 mb-1 md:text-base text-gray-600">
                                    {items.price}
                                </h5>
                                <h4 className="text-[0.7rem] md:text-base mb-2">{items.name}</h4>
                                <h5 className="text-[0.7rem] md:text-base font-bold">
                                    {items.edditon}
                                </h5>
                                <button
                                    id="choco"
                                    // onClick={() => {
                                    //   setSuccess(!showSuccess);
                                    // }}
                                    onClick={() => {
                                        cartName(items.name); 
                                        handleAddToCart(items);
                                    }}
                                    key={index}
                                    type="button"
                                    className={!showSuccess ? "text-white bg-blue-500 hover:bg-blue-800 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700 font-small rounded-lg text-xs px-3 py-2 text-center inline-flex items-center me-2  mt-2 lg:px-12 cursor-pointer" : "text-white bg-blue-200 font-small rounded-lg text-xs px-3 py-2 text-center inline-flex items-center me-2  mt-2 lg:px-12 disabled"}
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
                            </div>)
                    })}
                </div>
                 
         </div>
        
        </>
    )
}

export default discover;





