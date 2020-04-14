import React, {Component} from 'react';
import Header from './components/Header'
import './App.css';
import Home from './components/Home';
import Matches from './components/Matches';
import Tickets from './components/Tickets';
import Hospitality from './components/Hospitality';
import Tour from './components/Tour';
import Membership from './components/Membership';
import Citizen from './components/Citizen';
import Gift from './components/Gift';
import GiftVou from './components/GiftVou';
import Login from './components/Login';
import SignUp from './components/Signup';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import CardPayment from './components/CardPayment';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// import { render } from '@testing-library/react';

class App extends React.Component { 
  state = {
    counter: 0,
    productAmount: 0,
    productList:[
      "Adult Ticket",
      "Child Ticket"
    ],
  }

  

  adultPrice = () => {

    console.log("book tickets");
    this.setState({
      counter: this.state.counter + 55.00,
      productAmount: this.state.productAmount +1,
      productList: this.state.productList[0]
    });
  };

  childPrice = () => {

    console.log("book tickets");
    this.setState({
      counter: this.state.counter + 35.00
    });
  };
  adultMemPrice = () => {
    this.setState({
      counter: this.state.counter + 35.00
    });
  };
  childMemPrice = () => {
    this.setState({
      counter: this.state.counter + 25.00
    });
  };
  addPostage = () => {
    this.setState({
      counter: this.state.counter + 3.99
    });
  };
  render() {
    return (
      <div>
        <Router>
          <div>
              <Header />
          </div>
          <Switch>
              <Route path="/" exact component={Home}/>
              {/* <Route path="/matches" render={()=><Matches state={this.state} adultPrice={this.adultPrice}/>}/> */}
              <Route path="/matches" component={()=> <Matches/>}/>
              <Route path="/tickets" component={()=> <Tickets price={this.adultPrice} price1={this.childPrice}/>}/>
              <Route path="/hospitality" component={Hospitality}/>
              <Route path="/tour" component={Tour}/>
              <Route path="/membership" component={Membership}/>
              <Route path="/citizen" component= {()=> <Citizen price2={this.adultMemPrice} price3={this.childMemPrice}/>}/>
              <Route path="/gift" component={Gift}/>
              <Route path="/giftvou" component= {GiftVou}/>
              <Route path="/login" component={Login}/>
              <Route path="signUp" component={SignUp}/>
              <Route path="/basket" render={()=><Basket state={this.state}/>}/>
              <Route path="/checkout" render={()=><Checkout price4={this.addPostage} state={this.state}/>}/>
              <Route path="/cardpayment" component= {CardPayment}/>
              {/* <Route path="/hospitality" exact component={Hospitality}/> */}
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;
