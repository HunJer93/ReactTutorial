import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
//for 1-3 approach
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
        
    //     console.log(this)
    // }

    //for 4th approach to bind event handlers using a class property as an arrow function
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* if the event isn't bound using .bind, then this will remain undefined in the function call
        the second approach is to use an arrow function when calling the method.
        the 3rd or 4h approach is the best. Bind the event handler in the constructor. */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind