import React from "react"

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>This is written using JSX</h1>
    //     </div>
    // )

    // this is a react element with an id of element_id written without JSX
    // the syntax for elements is type, id, content
    return React.createElement(
    'div', 
    {id: 'element_id', className: 'dummyClass'},
    React.createElement('h1', null, "This is a React element"))
}

export default Hello