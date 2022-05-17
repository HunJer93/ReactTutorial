//use rfce to create react functional componnent
//the first way of using CSS is to create a CSS stylesheet and import the CSS classes into your JS
import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    //this is dependent on the prop being true or false. if it is true, it will call .primary from myStyles.css and display orange
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        {/*using className specifies the imported css className(s) starting with a . to call into the function*/}
        {/* this will pass both classes to the css stylesheet myStyles.css because of the back ticks and both functions being called*/}
        <h1 className= {`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default StyleSheet