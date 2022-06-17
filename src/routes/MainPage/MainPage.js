import React, {Component} from "react";
import EventsList from "../../components/Events/EventsList/EventsList";
import classes from './MainPage.module.css'
import Button from '../../components/Ui/Button/Button'
import classNames from 'classnames'
import { Link } from "react-router-dom";

class MainPage extends Component {
  state = {
    eventsList: [
      {
        id: 0,
        title: 'Sunday Run',
        type: 'Run',
        location: 'Elagin island',
        members: 10
      },
      {
        id: 2,
        title: 'Hard Cycle',
        type: 'Cycle',
        location: 'Unknown',
        members: 5
      }
    ],
    myEvents: [
      {
        id: 1,
        title: 'Day walking',
        type: 'Walking',
        location: 'Nevski avenue',
        members: 15
      }
    ]
  }

  onJoinHandler = (eventId) => {    
    const newEventsList = [...this.state.eventsList] 
    const newMyEvents = [...this.state.myEvents]    

    const index = newEventsList.indexOf(newEventsList.find(item => item.id === eventId))
    const myEvent = newEventsList.splice(index, 1)      

    newMyEvents.push(...myEvent)   
    
    this.setState({
      eventsList: newEventsList,
      myEvents: newMyEvents
    })    
  }

  onLeaveHandler = (eventId) => {
    const newEventsList = [...this.state.eventsList] 
    const newMyEvents = [...this.state.myEvents]    

    const index = newMyEvents.indexOf(newMyEvents.find(item => item.id === eventId))
    const myEvent = newMyEvents.splice(index, 1)      

    newEventsList.push(...myEvent)   
    
    this.setState({
      eventsList: newEventsList,
      myEvents: newMyEvents
    })   
  }

  render() {    
    const list = this.state.eventsList.length ? 
      <EventsList 
        onJoinClick={this.onJoinHandler} 
        eventsList={this.state.eventsList.sort((a, b) => a.id - b.id)} 
      /> 
      : null   

    const myList = this.state.myEvents.length ? 
      <EventsList 
        onLeaveClick={this.onLeaveHandler} 
        eventsList={this.state.myEvents.sort((a, b) => a.id - b.id)} 
        isMyEvents={true} 
      /> 
      : null   

    return (
      <div className={classes.MainPage}>
        <div className={classNames(classes.MainPageContainer, 'container')}>
          <h1>Let'sGo!</h1>
          <div className={classes.MainPageEvents}>
            {myList}
            {list}              
          </div>

          <Link style={{alignSelf: 'center'}} className="button button--primary" to={'events/create'}>
            Create your own event!
          </Link>          
        </div>        
      </div>
    )
  }
}

export default MainPage