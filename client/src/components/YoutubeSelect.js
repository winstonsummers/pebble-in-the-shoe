import React, { Component } from 'react';
//import axios after npm install
import axios from 'axios';

const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBaMtTfNBAAlNsNxJYRktabsWFERp_H4g8');


//base url for giphy search
const API_URL = 'http://api.giphy.com/v1/gifs/search'

var youtubeSearch = "";

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaMtTfNBAAlNsNxJYRktabsWFERp_H4g8&type=video&part=snippet&q=Centuries&maxResults=4



class YoutubeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    }
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
    return (
      <div>
        <h1>Test Youtube API</h1>
        <iframe width="420" height="315"
          src={this.state.video}>
        </iframe>
        <form onSubmit={this.getInfo}>
          <button>Press</button>
        </form>
      </div>
    );
  }
}

export default YoutubeSelect;