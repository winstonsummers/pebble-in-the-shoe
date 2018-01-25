import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
          <Link to="/start">Get Started!</Link>
        </span>);
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>
            {links}
          </nav>
          <header className="App-header">
            <div className="App-title">
              <h1>InDecisive Doves</h1>
              <h3>"For The Quarreling Couple"</h3>
            </div>
          </header>
        </div>
      );
  }
}

export default Nav;
