import React, { Component } from 'react';

class FormTwo extends Component {

  formTwoClick = (e) => {
    e.preventDefault();
    window.location.href="/Form";
  }
  render(){
    return (
    <div>
      <h1>Indecisive Doves</h1>
      <h2>{this.props.title}</h2>
      <h2>{this.props.match.params.title}</h2>
      <form onSubmit={this.formTwoClick}>
        <h2>5-Ideas</h2>
        <div>
          <input type='checkbox'></input>User Made Item1
        </div>
        <div>
          <input type='checkbox'></input>User Made Item2
        </div>
        <div>
          <input type='checkbox'></input>User Made Item3
        </div>
        <div>
          <input type='checkbox'></input>User Made Item4
        </div>
        <div>
          <input type='checkbox'></input>User Made Item5
        </div>
        <div>
        <input type="submit" value="DECIDE"></input>
        </div>
      </form>
    </div>
    );
  }
}

export default FormTwo;
