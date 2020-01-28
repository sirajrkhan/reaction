import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../components/hoc/withClass'
import Aux from '../components/hoc/Aux'
import AuthContext from '../context/auth-context'
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js -- constructor');
  }

  state = {
    persons: [
      { id: 'sdf32', name: 'Siraj', age: 99 },
      { id: 'adfd3', name: 'Habeeb', age: 13 },
      { id: 'fdas7', name: 'Noah', age: 5 },
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps', props)
    return state;
  }

  UNSAFE_componentWillMount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  loginHandler = () => {
    this.setState({authenticated:true})
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

    this.setState( (prevState,props) => {
        return {
        persons: new_persons,
        changeCounter: prevState.changeCounter + 5
      }
    })
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
    console.log('App.js - Render starts')
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
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
        <Cockpit
          heading={this.props.AppTitle}
          personVisible={this.state.showPersons}
          clicked={this.toggleHandler}
          children={cockpit.buttonText}
          />
        {persons_flag}
        </AuthContext.Provider>
      </Aux>
    )
  }
}
export default withClass(App,'App');