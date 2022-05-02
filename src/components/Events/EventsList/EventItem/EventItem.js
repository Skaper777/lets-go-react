import classes from './EventItem.module.css'

const EventItem = (props) => {
  let button = <button onClick={() => props.onJoinClick(props.eventItem.id)}>Join</button>

  if (props.isMyEvent) button = <button onClick={() => props.onLeaveClick(props.eventItem.id)}>Leave</button>

  return (
    <li className={classes.EventItem}>
      <h3>{props.eventItem.title}</h3>
      <p>Type: <b>{props.eventItem.type}</b></p>
      <p>Location: <b>{props.eventItem.location}</b></p>
      <p>Members: <b>{props.eventItem.members}</b></p>
      <div>       
        {button}
      </div>    
    </li>
  )
} 

export default EventItem