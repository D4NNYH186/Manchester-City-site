import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 

export default class Citizen extends Component {
    render() {

        return (
        
            <div>
            <div className="tikContainer">
            <p>ADULTS £25:00</p>
            <button className="button" onClick={this.props.price2}>ADD TO BASKET</button>
            </div>
            <div className="tikContainer">
            <p>CONCESSION £35:00</p>
            <button className="button" onClick={this.props.price3}>ADD TO BASKET</button>
            </div>
            <Link to="/basket"><button className="button logo" >GO TO BASKET</button></Link>
            </div>

            
        )
        
    }
}
