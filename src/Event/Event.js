import classes from './Event.module.scss'

console.log(classes)

function Event(props) {
  const inputClasses = [classes.input]

  if (props.name.length) inputClasses.push(classes['input--green'])
  else inputClasses.push(classes['input--red'])

  const style = {
    border: '1px solid #fcc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .94)'
  }

  return (
    <div className={classes.Event} style={style}>
      <h2>Event '{props.name}'</h2>
      <p>Members: {props.members}</p>     
      <input 
        className={inputClasses.join(' ')}
        type="text" 
        onChange={props.onChangeName} 
        value={props.name} 
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )        
}

export default Event