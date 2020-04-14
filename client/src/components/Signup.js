import React, { Component } from 'react'
import createUser from 'createUser'

import mcfc from '../images/mcfc.png'

export default class SignUp extends Component {
    render() {
        return (
            <div className="sign" >
            <h1>SIGN UP</h1>
                
                <h2>Username: </h2>
                <input name="username" type="text"></input>
                <h2>Password: </h2>
                <input name="password" type="password"></input>
                <br></br>
                <h2>Email:</h2>
                <input name="email" type="text"></input>
                <div className="space">
                <button onClick={createUser} className="button" type="submit">SIGN UP</button>
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