import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'


class BetterEventPractice extends Component {

    state = {
        number : 0,
        message : ''
    }

    constructor(props){
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    // arrow function don't need to be bind at constructor
    handleChange = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    handleClick(){
        alert(this.state.message)
        this.setState({
            message : ""
        })
    }

    static defaultProps = {
        name : "EventPractice",
        age : 10
    } // not used if given by parent component

    
    // always use setState method when update state value
    render(){
        return (
            <div>
                <input type="text" name="message" placeholder="write anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                    />
                <button onClick={this.handleClick}> Confirm</button>                    
            </div>

        )
    }
}


export default BetterEventPractice;
