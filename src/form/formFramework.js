function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function validateControl(value, validation = null) {
  if (!validation) return true

    let isValid = true 

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    if (validation.number) {
      isValid = value > 0 && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
}

export function onChangeHandler(e, controlName) {
  const formControls = {...this.state.formControls}
  const control = {...formControls[controlName]}

  control.value = e.target.value 
  control.touched = true
  control.valid = validateControl(control.value, control.validation)

  formControls[controlName] = control

  let isFormValid = true 

  Object.keys(formControls).every(name => isFormValid = formControls[name].valid)

  this.setState({
    formControls,
    isFormValid
  })
}

export function onSelectHandler(e) {
  this.setState({
    event: {type: e.target.value}
  })
}

export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: config.valid ? config.valid : !validation,
    touched: false,
    value: config.value ? config.value : ''
  }
}
