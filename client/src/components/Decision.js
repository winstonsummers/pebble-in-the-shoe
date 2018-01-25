import React, { Component } from 'react';
import axios from 'axios';


class Decision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    }
  }

  getInfo = (e) => {
    e.preventDefault();
    console.log('this happened');
    //axios syntax for api calls
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaMtTfNBAAlNsNxJYRktabsWFERp_H4g8&type=video&part=snippet&q=${this.props.match.params.thirdoptionone}&maxResults=4`)
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
        <h2>User Made Title</h2>
        <img className='smile' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'></img>
        <h3>Decision Made: {this.props.match.params.thirdoptionone}</h3>
        <iframe width="420" height="315"
          src={this.state.video}>
        </iframe>
        <button onClick={this.getInfo}>Video</button>
      </div>
    );
  }
}

export default Decision;
