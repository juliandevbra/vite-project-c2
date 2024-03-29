import { useState } from 'react'
import CardStyles from '../Styles/Card.module.css'
const Counter = ({counter, setCounter}) => {

    // console.log(useState('algo'))
    // const estado = useState[0]('algo')
    // const modificador = useState[1]('algo')

    // let contador = 0
    const add = () => {
       setCounter(counter+1)
    }
    const subtract = () => {
        setCounter(counter - 1)
    }
  return (
    <div className={CardStyles.btnGroup}>
        <button onClick={subtract}>-</button>
        <h3>{counter}</h3>
        <button onClick={add}>+</button>
    </div>
  )
}

export default Counter