import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // import our new component so we can use it!

class App extends Component {
  render() {


    return (
      <div className="App">
          <h1> Ferds Bog </h1>
          <p> Woohooo it's working </p>
          <Person name = "Quesarito" age = "19"> My Favorite Food: Fat Sals Philly Cheese Steak </Person>
          <Person name = "Lana Lana Red Pajama" age = "21"> My best friend: My Parasite </Person>
          <Person name = "Banter Claire" age = "20" > My hobbies: Yangers</Person> 
      </div>
    );


  }
}

export default App;
