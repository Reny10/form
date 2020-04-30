import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = ({ formErrors, ...rest }) => {let valid = true;

 // validate form errors being empty
  Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false); });

  // validate the form was filled out
  Object.values(rest).forEach(val => {val.length === null && (valid = false); });

  return valid;
};
class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            email: null,
            password:null,
            confirmPassword:null,
            hasAgreed: false,
            formErrors: {
            username: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    };
  }
    handleChange = e => {
    let target = e.target
    const name  = target.name;
    let formErrors = { ...this.state.formErrors };
    let value = target.type === 'checkbox' ? target.checked : target.value;
    switch (name) {
      case "username":formErrors.username = value.length < 3 ? "Min 3 char. required" : "";
        break;
      case "email":formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
        break;
      case "password": formErrors.password = value.length < 6 ? "Min 6 char. required" : "";
        break;
        case "confirmPassword": formErrors.confirmPassword = value.length < 6 ? "Min 6 char. required" : "";
        break;
        default:
        break;
        }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
     };
       handleSubmit = e => {
        const { password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
        alert("Passwords don't match");
        } 
        else if(formValid(this.state)) {
        console.info('Valid Form')
        }else{
        console.error('Invalid Form')
}}

        render() {
        const { formErrors } = this.state;
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange}  required />
              {formErrors.username.length > 0 && (<span className="errorMessage">{formErrors.username}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required />
              {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required />
                {formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Confirm Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
                {formErrors.confirmPassword.length > 0 && (<span className="errorMessage">{formErrors.confirmPassword}</span>)}
              </div>
               <div className="FormField">
                <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} required /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              <div className="FormField">
               <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
          </form>
          </div>
        );
    }
}
export default SignUpForm;
