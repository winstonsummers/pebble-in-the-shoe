import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Flash from './layout/Flash.js';
import Footer from './layout/Footer.js';
import Home from './Home.js';
import Nav from './layout/Nav.js';
import Login from './auth/Login.js';
import Profile from './Profile.js';
import Signup from './auth/Signup.js';

//importing for app comps
import Decision from './components/Decision.js';
import Form from './components/Form.js';
import FormFive from './components/FormFive.js';
import FormTwo from './components/FormTwo.js';
import Start from './components/Start.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    // If there is a token in localStorage
    let token = localStorage.getItem('mernToken');
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      });
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token);
        this.setState({
          token: response.data.token,
          user: response.data.user
        });
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log('cdm', err);
        this.setState({
          token: '',
          user: null
        });
      })
    }
  }

  updateUser = () => {
    this.getUser();
  }

  setFlash = (t, msg) => {
    this.setState({
      flash: msg,
      flashType: t
    });
  }

  cancelFlash = () => {
    this.setState({
      flash: '',
      flashType: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav user={this.state.user} />
            <div className="space">
              <Flash flashType={this.state.flashType} flash={this.state.flash} setFlash={this.setFlash} cancelFlash={this.cancelFlash} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={
                () => (<Login user={this.state.user} setFlash={this.setFlash} updateUser={this.updateUser} />)} />
              <Route path="/signup" component={
                () => (<Signup user={this.state.user} setFlash={this.setFlash} updateUser={this.updateUser} />)} />
              <Route path="/profile" component={
                () => (<Profile user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/start" component={
                () => (<Start user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/formfive" component={
                () => (<FormFive user={this.state.user} setFlash={this.setFlash} />)} />
              {/*route path passes different parameters*/}
              <Route path="/formtwo/:title/:optionone/:optiontwo/:optionthree/:optionfour/:optionfive"
                location={this.props.location}
                render={({
                    location,
                    match
                }) => (
                  //match allows for the pass of parameters
                  <FormTwo user={this.state.user} setFlash={this.setFlash} match={match} />
                )}/>
              <Route path="/form/:secondoptionone/:secondoptiontwo"
                location={this.props.location}
                render={({
                  location,
                  match
                }) => (
                  <Form user={this.state.user} setFlash={this.setFlash} match={match} />
                )} />
              <Route path="/decision/:thirdoptionone"
                location={this.props.location}
                render={({
                    location,
                    match
                }) => (
                  //match allows for the pass of parameters
                  <Decision user={this.state.user} setFlash={this.setFlash} match={match} />
                )}/>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
