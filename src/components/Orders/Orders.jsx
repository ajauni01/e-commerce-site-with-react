

import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    // here, savedCart should only be used for the initial state to extract data while making any change
    let savedCart = useLoaderData();
    // use the useState() hook to initiate any change
    let [cart, setCart] = useState(savedCart);
    //    function to handle the product removal from the cart
    let handleRemoveFromCart = (id) => {
        // use the filter property to get the items which are not to be deleted or removed
        let cartRemaining = cart.filter(product => product.id !== id);
        // update the useState() hook
        setCart(cartRemaining);
        // call the removeFromDb function, and pass the id to get the item deleted permanently from the local storage or data base.
        removeFromDb(id);

    }
    console.log(savedCart);
    return (
        <div className='shop-container '>
            <div className='review-container '>
                {
                    cart.map(product => <ReviewItems key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItems>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Orders;