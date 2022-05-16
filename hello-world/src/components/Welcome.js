import React, { Component } from 'react'


class Welcome extends Component {
    render() {
        //this is how to destructure variables that are being passed in a class component
        const {name, heroName} = this.props
        const {state1, state2} = this.state //this is how to set up multiple states
        //to access props in a class use this.variable.variable_id
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome