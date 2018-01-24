import React, {Component} from 'react';


class Form extends Component {
render() {
  return(
    <div>
      <h1>Title:</h1>
      <h1>Pick Your Favorite!</h1>
      <div>
        <form>
          <div>
            <input type="checkbox"></input>User made item 1
          </div>
          <div>
          <input type="checkbox"></input>User made item 2
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
