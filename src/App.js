import {Component} from 'react'
import './App.css';
import Event from './Event/Event'

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return ( 
      <div style = {divStyle}>
        <h1> Hello, Let 's Go!</h1>
        <Event name='Run' members='6'>
          <p>Test</p>
        </Event>
      </div>
    )
  }
}

export default App;