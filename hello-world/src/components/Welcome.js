import React, { Component } from 'react'


class Welcome extends Component {
    render() {
        //to access props in a class use this.variable.variable_id
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome