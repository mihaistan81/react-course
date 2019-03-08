import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  /** MODULE 3 - START ASSIGNMENT 1  */
  // state = {
  //   usernames: [
  //     {user: 'Andrei'},
  //     {user: 'Mihai'}
  //   ]
  // };

  // usernameChangeHandler = (event) => {
  //     this.setState({
  //       usernames: [
  //         {user: event.target.value},
  //         {user: 'Mihai 1'}
  //       ]
  //     });
  // };

  // render() {
  //     return (
  //       <div className="App">

  //           <UserInput change={this.usernameChangeHandler.bind(this)} username={this.state.usernames[0].user}/>

  //           <UserOutput username={this.state.usernames[0].user} />
  //           <UserOutput username={this.state.usernames[1].user} />
  //       </div>
  //     );
  // };
  /** MODULE 3 - END ASSIGNMENT 1  */
  
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Alina', age: 29},
      { name: 'Stephanie', age: 27}
    ],
    otherProp: "Some other Property"
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Alina', age: 29},
        { name: 'Stephanie', age: 30}
      ]
    });
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 30}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <div className="App-header">
            Header react app
        </div>

        <div className="App-body" >

            <button style={style} onClick={() => this.switchNameHandler('Maxy !!')}>Switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              click={this.switchNameHandler.bind(this, 'Maximilitian')}
              changed={this.onChangeHandler}
              >I am a romanian!</Person>
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
