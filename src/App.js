import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Alina', age: 29},
      { name: 'Stephanie', age: 27}
    ],
    otherProp: "Some other Property"
  }

  switchNameHandler = () => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Alina', age: 29},
        { name: 'Stephanie', age: 30}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
            Header react app
        </div>

        <div className="App-body" >

            <button onClick={this.switchNameHandler}>Switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}>I am a romanian!</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

            <div>{this.state.otherProp}</div>

        </div>
        <div className="App-footer">
          Footer content
        </div>
      </div>
    );
  }
}

export default App;
