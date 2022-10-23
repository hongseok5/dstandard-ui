import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'


class StandardStateComponent extends Component {

    state = {
        number : 0
    }

    static defaultProps = {
        name : "StandardStateComponent",
        age : 10
    } // not used if given by parent component

    
    // always use setState method when update state value
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


export default StandardStateComponent;
