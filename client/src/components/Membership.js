import React, { Component } from 'react'
import member from '../images/member.png'
import { Link } from 'react-router-dom'


export default class Membership extends Component {
    render() {

        return (
    
            <div>
                <h1 className="text">MEMBERSHIPS</h1>
                <br></br>
                <p className="text">Get closer to City with our exclusive 12-month memberships. Seasoncard holders are automatically enrolled into our Cityzens membership programme.</p>
                
                <p className="text bold">Please log in or register before purchasing.</p>
            <br></br>
                <div className="memCon">
                    <img className="memLogo" src={member} />
                    <Link to="/citizen"><button className="button">ADD TO BASKET</button></Link>
                </div>

            </div>
        )
    }
}