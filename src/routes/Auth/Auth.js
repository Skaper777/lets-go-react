import { Component } from "react";
import classes from './Auth.module.css'
import Button from '../../components/Ui/Button/Button'
import Input from '../../components/Ui/Input/Input'

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMsg: 'Not valid email!',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMsg: 'Not valid password!',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  signUpHandler = () => {

  }

  submitHandler = e => e.preventDefault()  

  validateControl(value, validation) {
    if (!validation) return true

    let isValid = true 

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (e, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}

    control.value = e.target.value 
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true 

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid
    })

    this.setState({
      formControls,
      isFormValid
    })
  }

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
          onChange={e => this.onChangeHandler(e, controlName)}
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