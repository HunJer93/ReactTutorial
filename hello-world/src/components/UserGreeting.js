//rce creates a class component
import React, { Component } from 'react'

class UserGreeting extends Component {
    //create constructor with rconst
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true

      }
    }
  render() {

    //short circuit opperator (4th method)
    return this.state.isLoggedIn && <div>Welcome Jeremy</div>

    //ternary opperator (3rd method)
    // return this.state.isLoggedIn ? (
    //         <div>Welcome Jeremy</div>
    //     ) :(
    //         <div>Welcome Guest</div>
    //     )    

    //2nd method
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome Jeremy</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //1st method
    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>Welcome Jeremy</div>
    //       )
    //   }
    //   else {
    //       return(
    //           <div>Welcome Guest</div>
    //       )
    //   }
    // return (
    //   <div>
    //      <div>Welome Jeremy</div>
    //      <div>Welome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting