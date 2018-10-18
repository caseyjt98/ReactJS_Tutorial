import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // import our new component so we can use it!
import Form from './Form/Form';

class App extends Component {

  state = {
    data: [
      {id: 1, name: "Casey"},
      {id:2, year: "Junior"},
      {id:3, year: "Cognitive Science"}
    ]

  }

  onSubmit = (model) => {
    alert (JSON.stringify(model));
  }

  render() {


    return (
      <div className="App">
          <h1> Ferds Bog </h1>
          <p> Woohooo it's working </p>
          <Person name = "Quesarito" age = "19"> My Favorite Food: Fat Sals Philly Cheese Steak </Person>
          <Person name = "Lana Lana Red Pajama" age = "21"> My best friend: My Parasite </Person>
          <Person name = "Banter Claire" age = "20" > My hobbies: Yangers</Person> 
      
      
        <Form 
        className = "form" 
        title = "Registration Form"
        model = {[
          {key: "name", label: "Name", type: "text", props: {required:true}},
          {key: "year", label: "Year", type: "text"},
          {key: "major", label: "Major", type: "text"}
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
        > </Form>
      

      
      </div>
    );


  }
}

export default App;
