import { Component } from "react";
import classes from './Auth.module.css'
import Button from '../../components/Ui/Button/Button'
import Input from '../../components/Ui/Input/Input'
import {createControl, onChangeHandler} from '../../form/formFramework'

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: createControl({
        label: 'Email',     
        type: 'email',   
        errorMsg: "Not valid email!"
      }, {required: true, email: true}),  
           
      password: createControl({
        label: 'Password',     
        type: 'password',   
        errorMsg: "Not valid password!"
      }, {required: true, minLength: 6})       
    }
  }

  loginHandler = () => {

  }

  signUpHandler = () => {

  }

  submitHandler = e => e.preventDefault()  

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, i) => {
      const control = this.state.formControls[controlName]

      return (
        <Input
          key={controlName + i}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMsg={control.errorMsg}
          onChange={e => onChangeHandler.call(this, e, controlName)}
        />
      )
    })    
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div className="container">
          <h1>Authorization</h1>
          
          <form onSubmit={this.submitHandler}>

            { this.renderInputs() }

            <Button              
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >Log in</Button>

            <Button 
              type="primary" 
              onClick={this.signUpHandler}
              disabled={!this.state.isFormValid}  
            >Sign up</Button>
          </form>
        </div>        
      </div>
    )
  }
}

export default Auth