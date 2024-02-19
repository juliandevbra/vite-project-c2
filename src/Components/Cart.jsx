import React from 'react'

const Cart = ({cart}) => {
  return (
    <ul>
        {cart.map(item => <li key={item.id}>{item.counter} - {item.tipo}</li>)}
    </ul>
  )
}

export default Cart