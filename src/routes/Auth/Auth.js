import { Component } from "react";
import classes from './Auth.module.css'
import Button from '../../components/Ui/Button/Button'
import Input from '../../components/Ui/Input/Input'

class Auth extends Component {
  loginHandler = () => {

  }

  signUpHandler = () => {

  }

  submitHandler = e => e.preventDefault()

  render() {
    return (
      <div className={classes.Auth}>
        <div className="container">
          <h1>Authorization</h1>
          
          <form onSubmit={this.submitHandler}>
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />

            <Button              
              onClick={this.loginHandler}>Log in
            </Button>

            <Button 
              type="primary" 
              onClick={this.signUpHandler}>Sign up
            </Button>
          </form>
        </div>        
      </div>
    )
  }
}

export default Auth