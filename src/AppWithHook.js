import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const AppWithHook = props => {

  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Alina', age: 29},
      { name: 'Stephanie', age: 27}
    ],
    otherProp: "Some other Property"
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personState, otherState);
  ## Comment

  const switchNameHandler = () => {
    console.log('Was clicked');
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Alina', age: 29},
        { name: 'Georgiana', age: 30}
      ],
      otherProp: personState.otherProp
    });
  }

  return (
    <div className="App">
      <div className="App-header">
          Header react app - Running AppWithHooks
      </div>

      <div className="App-body">
          <button onClick={switchNameHandler}>Switch name</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age} />
          <Person name={personState.persons[1].name} age={personState.persons[1].age} >I am a romanian!</Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].age} />

          <div>{personState.otherProp}</div>
      </div>
      <div className="App-footer">
        Footer content
      </div>
    </div>
  );
};


// state = {
//   persons: [
//     { name: 'Max', age: 28},
//     { name: 'Alina', age: 29},
//     { name: 'Stephanie', age: 27}
//   ],
//   otherProp: "Some other Property"
// }
//
// switchNameHandler = () => {
//   console.log('Was clicked');
//   this.setState({
//     persons: [
//       { name: 'Maximilian', age: 28},
//       { name: 'Alina', age: 29},
//       { name: 'Stephanie', age: 30}
//     ]
//   });
// }

export default AppWithHook;
