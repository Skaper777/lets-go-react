import React, {Component} from 'react'
import './App.scss';
import Event from './Event/Event'
import Counter from './Counter/Counter'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

export const ClickedContext = React.createContext(false)

class App extends Component {
  constructor(props) {    
    super(props) 

    this.state = {
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
      showEvents: false,
      clicked: false
    } 
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
        <ErrorBoundary key={index}>
          <Event            
            name={event.name} 
            members={event.members}
            index={index}
            onChangeName={e => this.changeNameHandler(e.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        </ErrorBoundary>        
      )          
    })

    return ( 
      <div style = {divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>        

        <hr/>

        <button 
          onClick={this.toggleEventsHandler}> 
            Show events!</button>

        <button onClick={() => this.setState({clicked: true})}>Change clicked</button>    

        { events }    
      </div>
    )
  }
}

export default App;