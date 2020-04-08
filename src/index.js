import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick= {props.handleClick}>
      {props.text}
    </button>
  )
}

const Stats = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
     
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick= {goodClick} text = "good" />
        <Button handleClick= {neutralClick} text = "neutral" />
        <Button handleClick= {badClick} text = "bad" />
      </div>
      {all ? 
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td><Stats text ="good" value = {good} /></td>
            </tr>
            <tr>
              <td><Stats text ="bad" value = {bad} /></td>
            </tr>
              <td><Stats text ="all" value = {all} /></td>
            <tr>
              <td><Stats text= "average" value ={ good - bad / all} /></td>
            </tr>
          </tbody>
        </table>
      </div> : "No feedback given" }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)