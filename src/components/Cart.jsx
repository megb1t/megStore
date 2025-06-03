import React from 'react';
export default function Cart(props) {
    const cartItemsShow = props.items;
    if (!cartItemsShow || cartItemsShow.length === 0) {
        return (
            <div style={{ background: 'white', border: '1px solid blue', padding: '1.5vw', width: '25vw' }}>
                <h2>Shopping Cart</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }
    return (
        <>
            <div className='w-[80vw] sm:w-[65vw] md:w-[60vw] lg:w-[40vw] overflow-scroll pt-[1.5vw] pr-[1.5vw] pl-[1.5vw] h-auto min-h-screen bg-white border'>
                <h2 className='pb-3'>Shopping Cart</h2>
                <div>
                    {cartItemsShow.map((items, index) => {
                        return (
                            <div key={index} className="m-5 items-center  flex justify-between">
                                <img className="w-10" src={items.image} alt="something"></img>
                                <p className="m-0 p-0">{items.name}</p>
                                <p className="m-0 p-0">{items.price}</p>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <hr />
            </div>
        </>
    )
}