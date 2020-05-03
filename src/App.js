import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//import Loader from 'react-loader-spinner'
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

  class App extends Component {
  render() {
    return (
    <Router basename="/react-auth-ui/">
    {/*<Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000}/>*/}
    <div className="App">
    <div className="App__Aside">     
    <div className="FormField_Asside">
    <label className="FormField__Label" htmlFor="name">First name</label>
    <input type="text" id="fname" className="FormField__Input" placeholder="Enter your first name" name="fname" required/>
    </div>
    <div className="FormField_Asside">
    <label className="FormField__Label" htmlFor="name">Last name</label>
    <input type="text" id="lname" className="FormField__Input" placeholder="Enter your last name" name="lname" required />
    </div>
    </div>
     <div className="App__Form">       
     <div className="PageSwitcher">
     <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
     <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
     </div>

     <Route exact path="/" component={SignUpForm}>
       </Route>
      <Route path="/sign-in" component={SignInForm}>
       </Route>
       </div>
       </div>
      </Router>
      );
  }
}
export default (App);



