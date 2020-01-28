import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Aux from '../../../components/hoc/Aux'
import withClass from '../../../components/hoc/withClass'
import personStyles from './Person.module.css'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props){
        super(props);
        this.inElement = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount(){
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inElement.current.focus();
    }
    render(){
        console.log('well.. this seems to be Person Comp...',this.context)
        return (
            <Aux>
                    {(this.context.authenticated) ? <p>User is Authenticated</p> : <p>Please Login</p>}
                <div>
                    <p onClick={this.props.click}>Name is... {this.props.name} ... and I am {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name} 
                        // ref={(inputEle) => {this.inputElement = inputEle}}
                        ref={this.inElement}
                        />
                </div>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,personStyles.personBG);

//<AuthContext.Consumer>
//{(context) => (context.authenticated) ? <p>User Authenticated</p> : <p>Please Login</p>}
//</AuthContext.Consumer>
