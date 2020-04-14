import React from 'react'
import Logo from '../images/cityLogo.png'
import homeLogo from '../images/home.png'
import basketlogo from '../images/basket.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="cityColor">
            <br></br>
            <Link to="/login" className="signIn text">SIGN IN '<ion-icon className="home-icon" name="person-circle-outline"></ion-icon></Link>
                {/* <p className="signIn">SIGN IN  '<ion-icon name="person-circle-outline"></ion-icon></p> */}
                <img className="cityLogo pad1" src={Logo} alt="city"/>
            
                {/* <div className="logo-container">
                    
                    {/* <ion-icon className="home-icon" name="home"></ion-icon> */}
                {/* </div>  */}
                <div className="flex-container-nav">
                    <nav className= "nav">
                        <Link className="pad" to="/"><img className="home-icon" src={homeLogo}/></Link>
                        <Link className="padding" to="/matches">Tickets</Link>
                        <Link className="padding" to="/hospitality">Hospitality</Link>
                        <Link className="padding" to="/tour">Tours</Link>
                        <Link className="padding" to="/membership">Memebership</Link>
                        <Link className="padding" to="/gift">Gift Vouchers</Link>
                    </nav>
                    <div className="basket-container">
                        <Link to="/basket"><img className="home-icon pad3" src={basketlogo} /></Link>
                    </div>
                </div>
                {/* <p>Tickets</p>
                <p>Hospitality</p>
                <p>Tours</p>
                <p>Memberships</p>
                <p>Gift Vouchers</p> */}
                {/* <p className="logo">Basket</p>   */}
                {/* <div className="basket-container">
                    <img className="home-icon" src={basketlogo} />
                </div> */}
        </div>
        
    )
}
