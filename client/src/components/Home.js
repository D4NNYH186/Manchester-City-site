import React, { Component } from 'react'
import City from '../images/manCitychamp.jpg'
import Covid from '../images/covidPic.png'

export default class Home extends Component {
    render() {

        return (
    
            <div>
                <h1 className="basket-container">WELCOME TO MANCHESTER CITY TICKETS & HOSPITALITY</h1>
                <img className= "homePic" src={City} alt="img" />
            
            
                <img className= "pad1" src={Covid} alt="img" />
            
            </div>
        )
    }
}