import React, { useState } from 'react'
import CardStyles from '../Styles/Card.module.css'
import Counter from './Counter'

const Card = ({ pizza, setCart }) => {
  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState(false)
  const obj = {
    padding: 5,
    color: theme ? '#080708' : '#E6E8E6',
    backgroundColor: theme ? '#E6E8E6' : '#080708'
  }
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
        <h4 style={obj}>
          {pizza.precio}
          <button style={obj} onClick={() => setTheme(!theme)}>🍕</button>  
        </h4>
        <Counter counter={counter} setCounter={setCounter}/>
        <button className={CardStyles.cartBtn} onClick={addCart}>Añadir al carrito</button>
    </div>
  )
}

export default Card


