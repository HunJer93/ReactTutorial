//use rfce to create a functional componenet
//this will be a componenet to render the person information so that it can be imported into NameList
import React from 'react'

//person is being passed as a prop down to the child functional component Person
//don't forget curly braces for the variable being passed down! 
function Person({person}) {
  return (
    <div>
        <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}.
        </h2>
    </div>
  )
}

export default Person