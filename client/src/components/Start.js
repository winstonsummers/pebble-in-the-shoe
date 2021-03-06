import React, { Component } from 'react';
import axios from 'axios';
import YoutubeSelect from './YoutubeSelect.js';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    }
  }

  startClick = () => {
    window.location.href="/FormFive";
  }


  //method for using axios to do API call and set results state variable to array from json
  getInfo = (e) => {
    e.preventDefault();
    console.log('this happened');
    //axios syntax for api calls
    axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaMtTfNBAAlNsNxJYRktabsWFERp_H4g8&type=video&part=snippet&q=cat&maxResults=4')
      .then(({ data }) => {
        console.log('this is the data' + data.items[0].id.videoId);
        this.setState({
          video: 'https://www.youtube.com/embed/' + data.items[0].id.videoId
        })
        console.log('this is video ' + this.state.video);
        });
  }

  render(){
    return (<div>
        <h1>Indecisive Doves</h1>

        <button onClick={this.startClick}>START</button>
        <button onClick={this.getInfo}>Video</button>

        <p>Description</p>
      </div>
    );
  }
}

export default Start;
