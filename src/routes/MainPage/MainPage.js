import { useState, useEffect } from 'react';
import EventsList from "../../components/Events/EventsList/EventsList";
import classes from './MainPage.module.css'
import classNames from 'classnames'
import { Link } from "react-router-dom"
import Loader from "../../components/Ui/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/features/events/eventsListSlice";

function MainPage() {   
  const [loading, setLoading] = useState(true)  

  const dispatch = useDispatch()
  const { eventsList } = useSelector((state) => state.eventsList) 

  // const onJoinHandler = (eventId) => {    
  //   const newEventsList = [...eventsList] 
  //   const newMyEvents = [...myEvents]    

  //   const index = newEventsList.indexOf(newEventsList.find(item => item.id === eventId))
  //   const myEvent = newEventsList.splice(index, 1)      

  //   newMyEvents.push(...myEvent)   

  //   //setEventsList(newEventsList)
  //   setMyEventsList(newMyEvents)    
  // }

  // const onLeaveHandler = (eventId) => {
  //   const newEventsList = [...eventsList] 
  //   const newMyEvents = [...myEvents]    

  //   const index = newMyEvents.indexOf(newMyEvents.find(item => item.id === eventId))
  //   const myEvent = newMyEvents.splice(index, 1)      

  //   newEventsList.push(...myEvent)   
    
  //   //setEventsList(newEventsList)
  //   setMyEventsList(newMyEvents)   
  // }  

  useEffect(() => {   
    dispatch(getEvents()).then(() => setLoading(false))       
  }, [dispatch])

  const list = eventsList.length ? 
    <EventsList 
      alone={true}
      //onJoinClick={onJoinHandler} 
      eventsList={[...eventsList].sort((a, b) => a.id - b.id)} 
    /> 
    : null   

  // const myList = myEvents.length ? 
  //   <EventsList 
  //     alone={eventsList.length ? null : true}
  //     onLeaveClick={onLeaveHandler} 
  //     eventsList={myEvents.sort((a, b) => a.id - b.id)} 
  //     isMyEvents={true} 
  //   /> 
  //   : null   

  return (
    <div className={classes.MainPage}>
      <div className={classNames('container')}>
        <h1>Let'sGo!</h1>
        { loading
          ? <Loader/>
          : <div className={classes.MainPageContainer}>
              <div className={classes.MainPageEvents}>            
                {/* {myList} */}
                {list}              
              </div>
              <Link style={{alignSelf: 'center'}} className="button button--primary" to={'events/create'}>
                Create your own event!
              </Link> 
            </div>
        }                    
      </div>        
    </div>
  )
}

export default MainPage