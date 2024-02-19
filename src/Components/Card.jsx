import React, { useState } from 'react'
import CardStyles from '../Styles/Card.module.css'
import Counter from './Counter'

const Card = ({ pizza, setCart }) => {
  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState(false)
  const obj = {
    color: theme ? 'orange' : 'red',
    backgroundColor: theme ? 'white' : 'yellow'
  }
  // const obj = { color: 'orange'}
  const addCart = () => {
    setCart((prevState) => 
    [
      ...prevState, 
      {
        ...pizza, 
        counter: counter
      }
    ])
  }
  return (
    <div className={CardStyles.cardContainer}>
        <img src={pizza.img} alt="" className={CardStyles.cardImg}/>
        <h3>{pizza.tipo}</h3>
        <h4 style={obj}>{pizza.precio}</h4>
        <button onClick={() => setTheme(!theme)}>🍕</button>
        <Counter counter={counter} setCounter={setCounter}/>
        <button onClick={addCart}>Añadir al carrito</button>
    </div>
  )
}

export default Card


