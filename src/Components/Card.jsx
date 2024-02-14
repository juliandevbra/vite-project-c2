import React from 'react'
import CardStyles from '../Styles/Card.module.css'

const Card = ({pizza}) => {
    console.log(CardStyles)
  return (
    <div className={CardStyles.cardContainer}>
        <img src={pizza.img} alt="" className={CardStyles.cardImg}/>
        <h3>{pizza.tipo}</h3>
        <h4 style={{color: 'orange'}}>{pizza.precio}</h4>
    </div>
  )
}

export default Card