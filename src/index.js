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
  const allCount = props.goodCount + props.neutralCount + props.badCount

  if (allCount === 0){
    return (
      <div>No feedback given</div>
    )
  }

  const average = (props.goodCount - props.badCount) / allCount
  return (
    <div>
      <p>good {props.goodCount}</p> 
      <p>neutral {props.neutralCount}</p>
      <p>bad {props.badCount}</p>
      <p>all {props.goodCount + props.neutralCount + props.badCount}</p>
      <p>average {average}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick= {goodClick} text = "good" />
      <Button handleClick= {neutralClick} text = "neutral" />
      <Button handleClick= {badClick} text = "bad" />
      <h1>statistics</h1>
      <Stats goodCount= {good} neutralCount={neutral} badCount={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)