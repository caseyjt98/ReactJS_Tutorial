import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // import our new component so we can use it!

class App extends Component {
  render() {


    return (
      <div className="App">
          <h1> Ferds Bog </h1>
          <p> Woohooo it's working </p>
          <Person></Person>
          <Person></Person>
      </div>
    );


  }
}

export default App;
