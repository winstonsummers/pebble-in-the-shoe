import React, { Component } from 'react';

class FormTwo extends Component {

  formTwoClick = (e) => {
    e.preventDefault();
    window.location.href="/Form";
  }

  clickedOne = (e) => {
    console.log(this.props.match.params.optionone);
  }

  render(){
    return (
    <div>
      <h1>Indecisive Doves</h1>
      <h2>{this.props.title}</h2>
      //render parameters from the url
      <h2>{this.props.match.params.title}</h2>
      <h3></h3>
      <form onSubmit={this.formTwoClick}>
        <h2>5-Ideas</h2>
        <div>
          <input type='checkbox' onClick={this.clickedOne}></input>{this.props.match.params.optionone}
        </div>
        <div>
          <input type='checkbox'></input>{this.props.match.params.optiontwo}
        </div>
        <div>
          <input type='checkbox'></input>{this.props.match.params.optionthree}
        </div>
        <div>
          <input type='checkbox'></input>{this.props.match.params.optionfour}
        </div>
        <div>
          <input type='checkbox'></input>{this.props.match.params.optionfive}
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
