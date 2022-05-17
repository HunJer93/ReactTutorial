//rfce creates a new functional componenet
import React from 'react'
import Person from './Person'

function NameList() {
    //const names = ['Bruce', 'Clark', 'Diana']
    

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
    persons.map(person => console.log(person))
    const personList = persons.map(person => <Person person={person} />)
            
  return <div>{personList}</div>
}

export default NameList