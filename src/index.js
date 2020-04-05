import React from 'react'
import ReactDOM from 'react-dom'

const Bday = (props) => (
  <strong>{props.bday == "October 13" ? "Happy Bday!" : ""}</strong>
)

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old. <Bday bday = {props.bday}/></p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by     
      <a href="https://github.com/hjake32">Jake</a>
    </div>
  )
}

const App = () => {
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age={age}  />
      <Hello name= "Jake" age = {25+1} bday = "October 13" />
      <Hello name = "Daisy"/>
      <Hello />
      <Footer />
    </>
  )
} 

ReactDOM.render(<App />, document.getElementById('root'))