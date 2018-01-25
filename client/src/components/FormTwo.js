import React, { Component } from 'react';

class FormTwo extends Component {
  render(){
    return (
    <div>
      <h1>Indecisive Doves</h1>
      <h2>User Made Title</h2>
      <form>
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
      </form>
    </div>
    );
  }
}

export default FormTwo;