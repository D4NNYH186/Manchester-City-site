import React, { Component } from 'react'
import mcfc from '../images/mcfc.png'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="sign" >
                <h2>Username: </h2>
                <input></input>
                <h2>Password: </h2>
                <input></input>
                <br></br>
                <div className="space">
                <button className="button">SIGN IN</button>
                <Link to="/signUp"><button className="button">SIGN UP</button></Link>
                </div>
                <div>
                <br>
                </br>
                <br></br>
                <br></br>
                    <img className="logo" src={mcfc} />
                </div>
            </div>
        )
    }
}