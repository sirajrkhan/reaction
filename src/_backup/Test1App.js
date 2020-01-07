import React, {Component} from 'react'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class Test1App extends Component{
    state = {
        username: ['Siraj','Habeeb']
    }

    userChangeHandler = (event) => {
        this.setState({
            username: [event.target.value,'Habeeb']
        })
    }
    
    render(){
        return(
            <div>
                <h1>Test 1: Exercise</h1>
                <UserInput changed={this.userChangeHandler} value={this.state.username[0]} />
                <UserOutput username={this.state.username[0]} />
                <UserOutput username={this.state.username[1]} />
            </div>
        )
    }
}

export default Test1App