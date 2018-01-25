import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Form from './Form.js';

class FormTwo extends Component {
  constructor(props){
    super(props);
    //add states to add to url to pass parameters
    this.state = {
        click: false,
        secondoptionone: null,
        secondoptiontwo: null
    }
  }

  formTwoClick = (e) => {
    e.preventDefault();
    this.setState({click: true});
  }

  clickedOne = (e) => {
    console.log(this.state.secondoptionone);
    if(!this.state.secondoptionone) {
      this.setState({secondoptionone: this.props.match.params.optionone});
      setTimeout(console.log('this is secon option one ', this.state.secondoptionone), 500);
    } else if(!this.state.secondoptiontwo) {
      this.setState({secondoptiontwo: this.props.match.params.optionone});
      setTimeout(console.log('this is secon option one ', this.state.secondoptiontwo), 500);
    }

  }

  clickedTwo = (e) => {
    console.log(this.state.secondoptiontwo);
    if(!this.state.secondoptionone) {
      this.setState({secondoptionone: this.props.match.params.optiontwo});
      console.log('this is secon option one', this.state.secondoptionone);
    } else if(!this.state.secondoptiontwo) {
      this.setState({secondoptiontwo: this.props.match.params.optiontwo});
      console.log('this is secon option one ', this.state.secondoptiontwo);
    }

  }

  render() {
    if(this.state.click){
      //adds to the url
      return  <Redirect to={'/form/' + this.state.secondoptionone + '/' +this.state.secondoptiontwo} />
    }
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
          <input type='checkbox' onClick={this.clickedTwo}></input>{this.props.match.params.optiontwo}
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
