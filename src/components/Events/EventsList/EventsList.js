import classes from './EventsList.module.css'
import EventItem from './EventItem/EventItem'

const EventsList = (props) => {
  let title = 'Events list'
  const cls = [classes.EventsList]

  if (props.alone) cls.push(classes.EventsListAlone)
  if (props.isMyEvents) title = 'My events'  

  return (    
    <div className={cls.join(' ')}>
      <h2>{title}</h2>
      <ul>
        {
          props.eventsList.map((item, index) => {
            return (
              <EventItem                
                eventItem={item} 
                key={index} 
                isMyEvent={props.isMyEvents} 
                onJoinClick={props.onJoinClick}
                onLeaveClick={props.onLeaveClick}
              />
            )              
          })
        }
      </ul>
    </div>    
  )
}

export default EventsList