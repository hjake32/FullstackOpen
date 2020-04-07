import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter = {counter} />
      <Button handleClick ={increaseByOne} text = "Plus" />
      <Button handleClick ={decreaseByOne} text = "Minus" />
      <Button handleClick ={setToZero} text = "Zero" />
      
    </div>
  )
}

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))