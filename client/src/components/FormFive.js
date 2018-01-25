import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import FormTwo from './FormTwo.js';


class FormFive extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: '',
        click: false
    }
  }

titleChange = (e) => {
  e.preventDefault();
  this.setState({title: e.target.value});
}

formfiveClick = (e) => {
  this.setState({click: true});

}

render() {
  if(this.state.click){
    return  <Redirect to="/formtwo" title={this.state.title}/>
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
              <input type="text" placeholder="Idea 1"></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 2"></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 3"></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 4"></input>
            </div>
            <div>
              <input type="text" placeholder="Idea 5"></input>
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
