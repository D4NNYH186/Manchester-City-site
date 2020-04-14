import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout(props) {
    console.log(props);
    
    return (
        <div>
            <h1> CHECKOUT</h1>

            <p>{props.state.productList}</p>
            <p>{props.state.productAmount}</p>
            <p>£{props.state.counter}</p>

            <button className="button"> Tracked First Class Postage</button>

            <Link to= '/cardpayment'><button className="button">PROCEED</button></Link>
        </div>
    )
}