import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    //don't forget to use this.setState to change values
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () =>{
        //     console.log('Callback value:', this.state.count) //this will log what the state is showing because of the arrow function is triggering with the state change
        // })
         

        //because of this method, the UI renders correctly because it is changing based on the previous state. 
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count) //this will log 1 state behind  the state because it is asyncronous
    }

    //because of this grouping, the state value is being grouped together, so instead of incrementing 5, it increments 1 (in commented out code). 
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter