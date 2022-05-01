import React, {Component} from "react";
import classes from './MainPage.module.css'

class MainPage extends Component {
  state = {
    eventsList: []
  }

  render() {
    return (
      <div className={classes.MainPage}>
        <h1>Test</h1>
      </div>
    )
  }
}

export default MainPage