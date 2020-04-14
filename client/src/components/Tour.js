import React, { Component } from 'react'
import covid from '../images/covidPic.png'

export default class Tour extends Component {
    render() {

        return (
    
            <div className="text">
                <h1>TOURS</h1>
                <div className="lBlue">
                <img className="covImg" src={covid} />
                </div>
            </div>
        )
    }
}