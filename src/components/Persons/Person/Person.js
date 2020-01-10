import React, { Component } from 'react'

class Person extends Component {
    render(){
        console.log('well.. this seems to be Person Comp...')
        return (
            <div className={this.props.styled}>
                <p onClick={this.props.click}>Name is... {this.props.name} ... and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person