import React from 'react'
import Backdrop from '../../Ui/Backdrop/Backdrop'
import classes from './Drawer.module.css'
import { NavLink } from "react-router-dom";

const links = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: 'about'
  }
]

const activeStyle = {
  textDecoration: "underline",
};

class Drawer extends React.Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink 
            to={link.url} 
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>
            {link.title}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) cls.push(classes.close)

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {
              this.renderLinks()
            }
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </React.Fragment>      
    )
  }
}

export default Drawer