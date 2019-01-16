import React, { Component } from 'react';

class App extends Component {
  render() {
     return   <div>
      <h1> it fucking works</h1>
      <div>
        <form id="form1" action="/profile" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" />
        </form>
        <button type="submit" form="form1" value="Submit">Submit</button>
      </div>
    </div>
  }
}

export default App;