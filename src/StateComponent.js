import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'


class StateComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            number : 0
        }
    }

    static defaultProps = {
        name : "StateComponent",
        age : 10
    } // not used if given by parent component

    
    
    render(){
        return (
            <div>
                Hello, My name is {this.props.name} .
                I am {this.props.age} years old.
                <p> number : {this.state.number} </p>
                <button onClick= { () => {
                    this.setState({
                        number : this.state.number + 1
                    })
                }}> Plus</button>
            </div>

        )
    }
}


export default StateComponent;
