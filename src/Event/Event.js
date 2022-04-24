import React from 'react'
import classes from './Event.module.scss'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Event extends React.Component {  
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 0) this.inputRef.current.focus()    
  }

  render() {
    const inputClasses = [classes.input]

    if (this.props.name.length) inputClasses.push(classes['input--green'])
    else inputClasses.push(classes['input--red'])

    return (
      <React.Fragment>
        <h2>Event '{this.props.name}'</h2>
        <p>Members: {this.props.members}</p>     
        <input 
          ref={this.inputRef}
          className={inputClasses.join(' ')}
          type="text" 
          onChange={this.props.onChangeName} 
          value={this.props.name} 
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )   
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  members: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Event, classes.Event)