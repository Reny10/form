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
class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            confirmPassword:null,
            formErrors: {
            email: '',
            password:'',
            confirmPassword:''
        }
    };
  }        
    handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
  switch (name) {
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
       }
       }
      render() {
        const { formErrors } = this.state;
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit} required >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required />
              {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required  />
               {formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password"> Confirm Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                {formErrors.confirmPassword.length > 0 && (<span className="errorMessage">{formErrors.confirmPassword}</span>)}
              </div>
              <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignInForm;