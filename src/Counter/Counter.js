import React from 'react'
import Counter2 from './Counter2'

class Counter extends React.Component {
    state = {
        count: 0
    }

    addCount = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        this.setState((prevState) => {
          return {
            count: prevState.count + 1
          }
        })
    }

    removeCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h2>Counter {this.state.count}</h2>
                <Counter2/>
                <button onClick={this.addCount}>+</button>
                <button onClick={this.removeCount}>-</button>
            </>
        )
        // return [
          
        //       <h2>Counter {this.state.count}</h2>,
        //       <button onClick={this.addCount}>+</button>,
        //       <button onClick={this.removeCount}>-</button>,
          
        // ]
    }
}

export default Counter