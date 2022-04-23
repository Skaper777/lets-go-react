import React from 'react'
import classes from './Event.module.scss'

class Event extends React.Component {  
  render() {
    const inputClasses = [classes.input]

    if (this.props.name.length) inputClasses.push(classes['input--green'])
    else inputClasses.push(classes['input--red'])

    const style = {
      border: '1px solid #fcc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .94)'
    }

    return (
      <div className={classes.Event} style={style}>
        <h2>Event '{this.props.name}'</h2>
        <p>Members: {this.props.members}</p>     
        <input 
          className={inputClasses.join(' ')}
          type="text" 
          onChange={this.props.onChangeName} 
          value={this.props.name} 
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )   
  }
}

export default Event