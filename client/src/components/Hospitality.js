import React, { Component } from 'react'
import tunLogo from '../images/tunLogo.png'
import hosp from '../images/hosp.png'

export default class Hospitality extends Component {
    render() {

        return (
            <div>
            <h1 className="text">HOSPITALITY</h1>
            <div className="backgroundPic">
                
                <img className="tunImg" src={tunLogo} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img className="hosp" src={hosp} />
            </div>
            </div>
        )
    }
}
