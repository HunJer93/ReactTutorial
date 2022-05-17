//rfce creates a new functional componenet
import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    

    const persons = [
        {
            id : 1,
            name : 'Bruce',
            age : 30, 
            skill: 'React'
        },
        {
            id : 2,
            name : 'Clark',
            age : 25, 
            skill: 'Angular'
        },
        {
            id : 3,
            name : 'Diana',
            age : 28, 
            skill: 'JavaScript'
        }
    ]

    //this uses a map and an arrow function to display each name in names. This is calling the Person prop to pass the info to the Person child
    //adding a key makes updating variables more efficient.
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
            
  return <div>{nameList}</div>
}

export default NameList