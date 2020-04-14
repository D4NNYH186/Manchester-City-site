import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 

export default class Tickets extends Component {
    buyAdultTicket = () => {
        fetch('http://localhost:8000/add-to-cart/adult')
    }
    
    render() {

        return (
        
            <div>
            <div className="tikContainer">
            <p>ADULTS £55:00</p>
            <button className="button" onClick={this.buyAdultTicket}>ADD TO BASKET</button>
            </div>
            <div className="tikContainer">
            <p>CONCESSION £35:00</p>
            <button className="button" >ADD TO BASKET</button>
            {/* onClick={this.props.price1} */}
            </div>
            <Link to="/basket"><button className="button logo" >GO TO BASKET</button></Link>
            </div>

            
        )
        
    }
}
