import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="max" age="10"/>
        <Person name="xma" age="20"> My Hobbies: Racing </Person>
        <Person name="axm" age="30"/>
      </div>
    );

  }
}

export default App;
