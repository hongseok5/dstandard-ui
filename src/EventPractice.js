import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'


class EventPractice extends Component {

    state = {
        number : 0,
        message : ''
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
                    value = {this.state.message}
                    onChange = { e => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                    />
            </div>

        )
    }
}


export default EventPractice;
