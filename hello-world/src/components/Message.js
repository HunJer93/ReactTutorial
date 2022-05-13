import React, { Component } from 'react'


class Message extends Component {

    //constructors are used to initalize state
    constructor(){
        super() //super is always needed because of inheritance
        this.state = {
            message: "Welcome Visitor"
        }
    }

    //this method will change the state of the message variable.
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }

    render() {
        //this will return a div with a message and a button. The button click changes the state by calling changeMessage()
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message