import { Component } from "react";
import classes from './EventCreate.module.css'
import Button from '../../../components/Ui/Button/Button'
import Input from '../../../components/Ui/Input/Input'
import Select from '../../../components/Ui/Select/Select'
import { Link } from "react-router-dom"
import {createControl, onChangeHandler, onSelectHandler} from '../../../form/formFramework'
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

function createFormControls() {
  return {
    title: createControl({
      label: 'Event name',        
      errorMsg: "Set name!"
    }, {required: true}),

    type: createControl({
      label: 'Event type',
      value: 1,     
    }),

    date: createControl({
      label: 'Event date',  
      type: 'date',      
      errorMsg: "Set date!"
    }, {required: true}),

    place: createControl({
      label: 'Event place',              
      errorMsg: "Set place!"
    }, {required: true}),

    members: createControl({
      label: 'Count of members',   
      type: 'number',           
      value: 2,
      valid: true,
      errorMsg: "Set members over than 0!"
    }, {required: true, number: true})   
  }
}

class EventCreate extends Component {
  state = {
    isFormValid: false,    
    formControls: createFormControls()
  }

  submitHandler = e => {    
    e.preventDefault()

    const eventData = {}

    for (let controlName in this.state.formControls) {      
      eventData[controlName] = this.state.formControls[controlName].value
    }

    console.log(eventData)
  } 

  cancelHandler = () => {}   

  renderControls() {
    const select = <Select
      label={this.state.formControls.type.label}
      value={this.state.formControls.type.value}
      onChange={onSelectHandler.bind(this)}
      options={[
        {text: 'Run', value: 1},
        {text: 'Cycle', value: 2},
        {text: 'Other', value: 3}
      ]}
    />

    return Object.keys(this.state.formControls).map((controlName, i) => {
      const control = this.state.formControls[controlName]

      return (
        <Auxiliary key={controlName + i}>
          { controlName !== 'type' ? <Input             
            label={control.label}
            value={control.value}
            valid={control.valid}
            type={control.type}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMsg={control.errorMsg}
            onChange={e => onChangeHandler.call(this, e, controlName)}
          /> : select }
        </Auxiliary>        
      )
    })
  }

  render() {
    return (
      <div className={classes.EventCreate}>
        <div className="container">
          <h1>Create new Event</h1>

          <form onSubmit={this.submitHandler}>
            { this.renderControls() }        

            <Button
              type="primary"
              onClick={this.createEventHandler}
              disabled={!this.state.isFormValid}
            >
              Create event!
            </Button>
            
            <Link className="button" to={'/'}>
              Cancel
            </Link>            
          </form>
        </div>
      </div>
    )
  }
} 

export default EventCreate