import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'sdf32', name: 'Siraj', age: 43},
      {id: 'adfd3', name: 'Habeeb', age: 13},
      {id: 'fdas7', name: 'Noah', age: 5},
    ],
    showPersons: true
  }

  nameChangedHandler = (event, id) => {
    
    // console.log(`Event: ${event.target.value} ID: ${id}`)
    const personIndex = this.state.persons.findIndex( p => {
      return (id === p.id);
    });

    const new_person = {...this.state.persons[personIndex]}
          new_person.name = event.target.value;
    
    const new_persons = [...this.state.persons]
          new_persons[personIndex] = new_person;

    this.setState(
      {persons: new_persons})
  }

  toggleHandler = () => {
    this.setState({ showPersons : !this.state.showPersons})
  }

  personDeleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render (){
    let persons_flag = null;
    const buttonStyle = {padding: `5px`, border: `2px solid #CCC`};

    if (this.state.showPersons){
        persons_flag = (
          <div>
            {
              this.state.persons.map((person,index) => {
              return <Person
                        name={person.name} 
                        age={person.age} 
                        key={person.id}
                        click={() => this.personDeleteHandler(index)}
                        changed={(event) => this.nameChangedHandler(event,person.id)}
                        />
            })
            }
            </div>
        )
    }

    return (
      <div className="App">
        <h1>Okay</h1>
        <button style={buttonStyle} onClick={this.toggleHandler}>Toggle Person</button>
        {persons_flag}
      </div>
    )
  }
}
export default App;