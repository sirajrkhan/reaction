import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    render() {
        console.log('hello from Persons Comp...')
         return this.props.persons.map((person, index) =>
            <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
            />
        )    
    }
}

export default Persons;