import { Component } from "react";
import classes from './EventCreate.module.css'
import Button from '../../../components/Ui/Button/Button'
import { Link } from "react-router-dom"

class EventCreate extends Component {
  submitHandler = e => e.preventDefault()

  createEventHandler = () => {}

  cancelHandler = () => {}

  render() {
    return (
      <div className={classes.EventCreate}>
        <div className="container">
          <h1>Create new Event</h1>

          <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="title" />
            <select></select>
            <input type="date" placeholder="date" />
            <input type="text" placeholder="place" />           
            <input type="number" placeholder="members" />
            <textarea placeholder="Additional info"></textarea>   

            <Button
              type="primary"
              onClick={this.createEventHandler}
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