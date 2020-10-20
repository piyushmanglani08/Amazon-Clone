import React from 'react'
import { Route } from 'react-router-dom';
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__right">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/Jupiter/V252166690_Rush-Wireless-OnePlus_8T_Mobile_Launches_xbox._CB419091888_SY500_.jpg" alt="" />
            <div>
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>
            </div>
        </div>
        <div className="checkout__right">
        <Subtotal />
        </div>
    </div>
    )
}

export default Checkout;
