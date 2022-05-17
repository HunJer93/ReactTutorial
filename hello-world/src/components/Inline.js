//use rfce to create react functional componenets
//the 2nd method to use CSS is to define it inline within JS functions
import React from 'react'

//this will directly create CSS and use it as variables to pass to functions. 
//the CSS attributes can be called with the 'style' call within JS
const heading = {
    fontSize: '72px',
    color: 'blue'

}
function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline