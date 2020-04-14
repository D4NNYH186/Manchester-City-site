import React, { Component } from 'react'
import gift from '../images/gift.png'
import { Link } from 'react-router-dom'

export default class Gift extends Component {
    render() {

        return (
    
            <div>
                <h1 className="text">GIFT VOUCHERS</h1>
                <p className="text">Treat yourself or someone special to the perfect gift with Manchester City.</p>

<p className="text">Purchase a gift voucher for your desired amount, which can be put towards an unforgettable Hospitality experience, Match Tickets, Stadium <br></br>& Club Tours or Cityzens Matchday Membership.</p>
    <div className="memCon">
    <img className="memLogo" src={gift} />
            <Link to="/giftvou"><button className="button">ADD TO BASKET</button></Link>
    </div>

            </div>
        )
    }
}