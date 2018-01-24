import React, {Component }  from 'react';


class FormFive extends Component {
render() {
  return(
    <div>
      <h1>Title:</h1>
      <input type="text" placeholder="What are you trying to decide?"></input>
      <h1>5 ideas</h1>
      <form>
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
    );
  }
}

export default FormFive;
