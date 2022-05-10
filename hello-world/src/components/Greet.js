import React from 'react'

// function Greet() {
//     return <h1>Hello Jeremy</h1>
// }

//use props.id to access the id element
const Greet = props => {
console.log(props)
return(
    <div>
        <h1>
            Hello {props.name} a.k.a {props.heroName}
        </h1>
        {props.children}
    </div>

)
}

//exports as any name 
export default Greet