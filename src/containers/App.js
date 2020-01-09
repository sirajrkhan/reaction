import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import './App.css'

class App extends Component {
  state = {
    persons: [
      { id: 'sdf32', name: 'Siraj', age: 99 },
      { id: 'adfd3', name: 'Habeeb', age: 13 },
      { id: 'fdas7', name: 'Noah', age: 5 },
    ],
    showPersons: true,
  }

  nameChangedHandler = (event, id) => {
    // console.log(`Event: ${event.target.value} ID: ${id}`)
    const personIndex = this.state.persons.findIndex(p => {
      return (id === p.id);
    });

    const new_person = { ...this.state.persons[personIndex] }
    new_person.name = event.target.value;

    const new_persons = [...this.state.persons]
    new_persons[personIndex] = new_person;

    this.setState(
      { persons: new_persons })
  }

  toggleHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  personDeleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    let persons_flag = null;
    const cockpit = {
      buttonText: "Toggle the Button"
    }

    if (this.state.showPersons) {
      persons_flag = (
        <div className="personStyle">
          <Persons
            persons={this.state.persons}
            clicked={this.personDeleteHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          heading={this.props.AppTitle}
          personVisible={this.state.showPersons}
          clicked={this.toggleHandler}>
          {cockpit.buttonText}
        </Cockpit>
        {persons_flag}
      </div>
    )
  }
}
export default App;