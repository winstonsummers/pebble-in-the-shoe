import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Decision from './Decision.js';

class Form extends Component {
  constructor(props){
    super(props);
    //add states to add to url to pass parameters
    this.state = {
        click: false,
        thirdoptionone: null,
    }
  }

  formClick = (e) => {
    e.preventDefault();
    this.setState({click: true});
  }

  clickedOne = (e) => {
    console.log(this.state.thirdoptionone);
    if(!this.state.secondoptionone) {
      this.setState({thirdoptionone: this.props.match.params.secondoptionone});
      setTimeout(console.log('this is secon option one ', this.state.secondoptionone), 500);
    }
  }

  clickedTwo = (e) => {
    console.log(this.state.thirdoptionone);
    if(!this.state.secondoptionone) {
      this.setState({thirdoptionone: this.props.match.params.secondoptiontwo});
      setTimeout(console.log('this is secon option one ', this.state.secondoptionone), 500);
    }
  }

render() {
  if(this.state.click){
    //adds to the url
    return  <Redirect to={'/decision/' + this.state.thirdoptionone} />
  }

  return(
    <div>
      <h1>Title:</h1>
      <h1>Pick Your Favorite!</h1>
      <div>
        <form onSubmit={this.formClick}>
          <div>
            <input type="checkbox" onClick={this.clickedOne}></input>{this.props.match.params.secondoptionone}
          </div>
          <div>
          <input type="checkbox" onClick={this.clickedTwo}></input>{this.props.match.params.secondoptiontwo}
          </div>
          <div>
            <input type="submit" value="DECIDE!"></input>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default Form;
