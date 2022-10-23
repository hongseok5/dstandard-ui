import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'


class WorkBoard extends Component {

    static defaultProps = {
        name : "work board2"
    } // not used if given by parent component

    static propTypes = {
        name : PropTypes.string.isRequired,
        age : PropTypes.number.isRequired
    }
    
    render(){
        return (
            <div>
                Hello, My name is {this.props.name} .
                I am {this.props.age} years old.
            </div>

        )
    }
}


export default WorkBoard;
