import React, { Component } from 'react';
import ValidationComp from './ValidationComp/ValidationComp'
import CharComp from './CharComp/CharComp'
import './App.css';

class App extends Component {

  state = ({
    para: "",
    char: []
  })

  checkLen = (len) => {
    const min_len = 5;
    const max_len = 15;
    let message = null;
      if (len < min_len){
          message = ` Current Value (${len}) is below Min Length of ${min_len}`
      }
      else if (len > max_len){
          message = ` Current Value (${len}) Exceeded Max Length of ${max_len}`
      }
      else {
        message = len
      }
      return message
  }

  lenCounterHandler = (event) => {
    let para = event.target.value;
    let paraArr = para.split('');
    this.setState({
      para: event.target.value,
      char: paraArr
    })
  }

  deleteCharHandler = (index) => {
    // console.log(event.target.innerText +' and '+index)
    let newChar = this.state.char.filter( (val,ind) => ind !== index)
    this.setState({ char: newChar})
  }

  paraStyle = {
    border: `2px solid #666`,
    backgroundColor: `#DED`,
    padding: `5px`,
    margin: `5px`
  }

  render (){
    return (
      <div className="App">
        <h1>!Okay</h1>
        <input type="text" onChange={this.lenCounterHandler} />
        <p style={this.paraStyle}>You entered: {this.state.para}</p>
        <ValidationComp len={this.checkLen(this.state.para.length)} />
        {
          (this.state.char.length > 0) ?
            this.state.char.map( (c,index) =>
            <CharComp key={index} charVal={c} clicked={() => this.deleteCharHandler(index)} />
          )
          : <div style={{padding: `15px`}}>No Chars Entered Yet</div>
        }
      </div>
    )
  }
}
export default App;