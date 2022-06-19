import React, {Component} from "react";
import EventsList from "../../components/Events/EventsList/EventsList";
import classes from './MainPage.module.css'
import classNames from 'classnames'
import { Link } from "react-router-dom"
import axios from "axios"
import Loader from "../../components/Ui/Loader/Loader";

class MainPage extends Component {
  state = {
    eventsList: [],
    myEvents: [],
    loading: true
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

  async componentDidMount() {
    try {
      const res = await axios.get('https://letsgo-react-default-rtdb.europe-west1.firebasedatabase.app/events.json')
      const events = []  

      Object.keys(res.data).forEach((key, i) => {
        const ev = res.data[key]
        ev.id = key
        events.push(ev)
      })    
     
      this.setState({
        eventsList: events,
        loading: false
      })
    } catch (error) {
      console.error(error)
    }    
  }

  render() {       
    const list = this.state.eventsList.length ? 
      <EventsList 
        alone={this.state.myEvents.length ? null : true}
        onJoinClick={this.onJoinHandler} 
        eventsList={this.state.eventsList.sort((a, b) => a.id - b.id)} 
      /> 
      : null   

    const myList = this.state.myEvents.length ? 
      <EventsList 
        alone={this.state.eventsList.length ? null : true}
        onLeaveClick={this.onLeaveHandler} 
        eventsList={this.state.myEvents.sort((a, b) => a.id - b.id)} 
        isMyEvents={true} 
      /> 
      : null   

    return (
      <div className={classes.MainPage}>
        <div className={classNames('container')}>
          <h1>Let'sGo!</h1>
          { this.state.loading
            ? <Loader/>
            : <div className={classes.MainPageContainer}>
                <div className={classes.MainPageEvents}>            
                  {myList}
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
}

export default MainPage