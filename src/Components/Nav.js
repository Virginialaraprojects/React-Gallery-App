import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component{
  state={
    button:''
  }

  handleclick=(e) => {
    this.props.onClick(e.target.textContent);
    this.setState({
      button:e.target.textContent
    });
  }



  render(){
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/sunset' onClick={this.handleclick}>Sunset</NavLink></li>
          <li><NavLink to='/butterfly'onClick={this.handleclick}>Butterfly</NavLink></li>
          <li><NavLink to='/paradise'onClick={this.handleclick}>Paradise</NavLink></li>
        </ul>
      </nav>

    )
}
}
export default Nav;