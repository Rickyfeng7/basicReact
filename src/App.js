import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person/>
      </div>
    );
    // the method createElement takes at least 3 elements but unlimited amount of arguments, react renders html by translating it into JSX like the example below. 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?' ))
  }
}

export default App;
