import React from 'react'
import { Link } from 'react-router-dom'

export default function Basket(props) {
    console.log(props);
    
    return (
        <div>
            <h1> This is my basket</h1>
            <p>{props.state.productList}</p>
            <p>{props.state.productAmount}</p>
            <p>£{props.state.counter}</p>

            <Link to="/checkout"><button className="button">CHECKOUT</button></Link>
        </div>
    )
}
