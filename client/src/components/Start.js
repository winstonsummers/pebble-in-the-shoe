import React, { Component } from 'react';

class Start extends Component {

  startClick = () => {
    console.log('startClick called');
  }

  render(){
    return (<div>
        <h1>Indecisive Doves</h1>
        <button onClick={this.startClick}>START</button>
        <p>Description</p>
      </div>
    );
  }
}

export default Start;