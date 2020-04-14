import React, { Component } from 'react'
import cityLiv from '../images/cityLiv.jpg'
import bourne from '../images/bourne.jpg'
import { Link } from 'react-router-dom'

export default class Matches extends Component {
    render() {

        return (
    
            <div >
                <h1 className="text"> MEN'S TICKETS</h1>
                <br></br>
                <br></br>
                <p className="text">All Premier League games on sale from £24. Please note fixture dates and kick-off times are subject to change at any time. Supporters are advised to secure their ticket before booking travel or accomodation </p>
    
    
                <div className="match-container">
                <img className="matchLogo" src={cityLiv} alt="img" />
                
                
                    <p className="bold text">MANCHESTER CITY V SCUM<br></br>05/04/2020 16:30 | Premier League<br></br><br></br>Ticket Info: Now on sale to supporters that have previously attended three fixtures at the Etihad Stadium.<br></br> Four tickets per supporter. This fixture is NOT included in the ticket bundle.</p>
                    
                    <button className="button">SOLD  OUT</button>
                
                    </div>
                    <div className="match-container">
                <img className="matchLogo" src={bourne} alt="img" />
                
                
                    <p className="bold text1">MANCHESTER CITY V AFC BOURNEMOUTH<br></br>02/05/2020 15:00 | Premier League<br></br><br></br>Ticket Info: Now On General Sale. Six Tickets per supporter. </p>
                    
                    
                   <Link to="/tickets"><button className="button"  >BUY TICKETS</button></Link>
                    {/* onClick={this.props.adultPrice} ADULT PRICE FUNCTION SYNTAX */}
                    </div>
            </div>
        )
    }
}
