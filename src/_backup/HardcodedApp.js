import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Siraj', age: 43},
      {name: 'Habeeb', age: 13},
      {name: 'Noah', age: 5},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 43},
        {name: 'Habeeb', age: 13},
        {name: 'NoahKhan', age: 3.8},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Siraj', age: 43},
        {name: 'Habeeb', age: 13},
        {name: event.target.value, age: 3.8},
      ]
    })
  }

  toggleHandler = () => {
    // console.log('toggle...'+this.state.showPersons)
    this.setState({ showPersons : !this.state.showPersons})
  }

  render (){
    let persons_flag = null;

    if (this.state.showPersons){
        persons_flag = (
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,'Khan')}
              > My hobbies: Karate, Cycling, Drawing etc. </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}
              />
            </div>
        )
    }

    return (
      <div className="App">
        <h1>Let's start</h1>
        <button onClick={() => this.switchNameHandler('SR Khan')}>Switch</button>
        <button onClick={this.toggleHandler}>Toggle</button>
        {persons_flag}
      </div>
    )
  }
}
export default App;