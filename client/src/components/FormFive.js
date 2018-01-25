import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import FormTwo from './FormTwo.js';


class FormFive extends Component {
  constructor(props){
    super(props);
    //add states to add to url to pass parameters
    this.state = {
        title: '',
        optionone: '',
        optiontwo: '',
        optionthree: '',
        click: false
    }
  }

titleChange = (e) => {
  e.preventDefault();
  this.setState({title: e.target.value});
}

opinionOneChange = (e) => {
  e.preventDefault();
  this.setState({optionone: e.target.value});
  console.log(this.state.optionone);
}

opinionTwoChange = (e) => {
  e.preventDefault();
  this.setState({optiontwo: e.target.value});
  console.log(this.state.optiontwo);
}

optionThreeChange = (e) => {
  e.preventDefault();
  this.setState({optionthree: e.target.value});
  console.log(this.state.optionthree)
}
optionFourChange = (e) => {
  e.preventDefault();
  this.setState({optionfour: e.target.value});
}

optionFiveChange = (e) => {
  e.preventDefault();
  this.setState({optionFive: e.target.value});
}

formfiveClick = (e) => {
  this.setState({click: true});

}

render() {
  if(this.state.click){
    //adds to the url
    return  <Redirect to={"/formtwo/"+ this.state.title + '/' + this.state.optionone + '/' + this.state.optiontwo + '/' + this.state.optionthree + '/' + this.state.optionfour + '/' + this.state.optionfive} />
  }
  return(

    <Router>
      <div>
        <Route path="/formtwo" component={
          () => (<FormTwo user={this.props.user} setFlash={this.props.setFlash} title={this.state.title} />)} />
        <div>
          <h1>Title:</h1>
          <h1>5 ideas</h1>
          <form onSubmit={this.formfiveClick}>
            <div>
              <input type="text" value={this.state.title} onChange={this.titleChange} placeholder="What are you trying to decide?"></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 1" value={this.state.opinionone} onChange={this.opinionOneChange}></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 2" value={this.state.opiniontwo} onChange={this.opinionTwoChange}></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 3" value={this.state.optionthree} onChange={this.optionThreeChange} ></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 4" value={this.state.optionfour} onChange={this.optionFourChange}></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 5" value={this.state.optionfive} onChange={this.optionFiveChange}></input>
            </div>
            <div>
            <input type="submit" value="DECIDE"></input>
            </div>
          </form>
        </div>
      </div>
    </Router>
    );
  }
}

export default FormFive;
