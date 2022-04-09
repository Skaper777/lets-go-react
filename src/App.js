import {Component} from 'react'
import './App.css';
import Event from './Event/Event'

class App extends Component {
  state = {
    events: [
       {
          name: 'Run',
          members: 6
       },
       {
          name: 'Cycle',
          members: 10
       }
    ],
    pageTitle: "Hello, Let 's Go!",
    showEvents: false
  }  

  toggleEventsHandler = () => {
    this.setState({
      showEvents: !this.state.showEvents
    })
  }

  changeNameHandler(name, index) {
    const event = this.state.events[index]
    event.name = name

    const events = [...this.state.events]
    events[index] = event

    this.setState({events})
  }

  deleteHandler(index) {
    let events = [...this.state.events]

    events.splice(index, 1)

    this.setState({events})
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let events = null 

    if (this.state.showEvents) events = this.state.events.map((event, index) => {
      return (
        <Event 
          key={index}
          name={event.name} 
          members={event.members}
          onChangeName={e => this.changeNameHandler(e.target.value, index)}
          onDelete={this.deleteHandler.bind(this, index)}
        />
      )          
    })

    return ( 
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggleEventsHandler}> 
            Show events!</button>

        { events }    
      </div>
    )
  }
}

export default App;