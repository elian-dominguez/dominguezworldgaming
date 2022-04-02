import React from 'react'
import './style.css'
import { useCartContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table'
import { BsTrash } from "react-icons/bs";
import Button from 'react-bootstrap/Button'

export default function CartWidget() {
  const { cartList, clearCartList, eliminateFromCartList } = useCartContext()

  return (
    <div className='cartList'>
      {cartList.length === 0 ? <div>El carrito esta vacío</div> : 
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del juego</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
    { cartList.map(game =>
        <tbody key={game.id}>
          <tr>
            <td>{game.id}</td>
            <td>{game.title}</td>
            <td>{game.cantidad}</td>
            <td>{game.price}</td>
            <td> <BsTrash onClick={() => eliminateFromCartList(game.id)} size={20} cursor={'pointer'}/> </td>     
          </tr>
        </tbody> 
      )}
      <br />
      </Table>
      } 
      {cartList.length !== 0 ? <Button className='clearList' size='sm' onClick={clearCartList} variant="danger">Limpiar carrito</Button> : cartList}    
    </div>
  );
}
      
