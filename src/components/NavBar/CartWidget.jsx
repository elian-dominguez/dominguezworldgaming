import React from 'react'
import carrito from '../../img/carrito.png'
import './NavBar.css'

export default function CartWidget() {
  return (
      <img src={carrito} className='cart'/>
      )
}
      
