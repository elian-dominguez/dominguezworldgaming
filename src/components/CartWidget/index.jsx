import React, { useState } from 'react'
import './style.css'
import { useCartContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table'
import { BsTrash } from "react-icons/bs";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { addDoc, collection, doc, documentId, getFirestore, updateDoc } from 'firebase/firestore';
import { Message, Notification } from 'rsuite';
import toaster from 'rsuite/toaster';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Toast from 'react-bootstrap/Toast'

export default function CartWidget() {
  const { cartList, clearCartList, eliminateFromCartList, itemsPrice } = useCartContext()

  const generateOrder = () => {

    // e.preventDefault();

    let orden = {
      buyer : { name: "Elian", phone: "123456", email: "elian@gmail.com" },

      items : cartList.map(cartItem => {
       const id = cartItem.id
       const title = cartItem.title
       const price = cartItem.price
       const cantidad = cartItem.cantidad

       return {id, title, price, cantidad}
      }),
      total: itemsPrice()
    }
    // Creacion de un documento
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then(result => {console.log(result)
          return result
      })
    .then(result => toaster.push(<Message duration={4000} type='success'>
      <b>¡Compra realizada exitosamente!</b>
      <hr style={{ color: 'black', margin: 5 }} /><br />
      ID de orden de compra: {result.id} </Message>))
    .catch(err => console.log(err))
    .finally(() => clearCartList()) 

    // const queryUpdate = doc(db, "productos", orden.items.id)
    // updateDoc(queryUpdate, {
    //   price : 100
    // })
    // console.log(orden)
  }

  return (
    <div className='cartList'>
      {
      cartList.length === 0 
      ? 
      <div>
      El carrito esta vacío
      <br />
      <br />
      <Link to='/' >
      <Button variant="info">¡Comprar ya!</Button> 
      </Link>
      </div>
      : 
      <>
      <Table size='' striped bordered hover variant="dark">
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
            <td>${game.price}</td>
            <td> <BsTrash onClick={() => eliminateFromCartList(game.id)} size={20} cursor={'pointer'}/> </td>     
          </tr>
        </tbody> 
      )}
      <br />
      {cartList.length !== 0 ? 
      <>
        <thead>
          <tr>
            <th colSpan={3}></th>
            <th colSpan={2}><b>Precio total</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}></td>
            <td colSpan={2}>${itemsPrice()}</td> 
          </tr>
        </tbody> 
        <br /> 
      </>
      : cartList} 
      </Table>
      <Button className='clearList' size='sm' onClick={clearCartList} variant="danger">Limpiar carrito</Button>
      <br />
      <Button onClick={() => {
        // notification()
        generateOrder()
        }} 
        variant="success">
        Generar compra
        </Button>
      </>
      }     
    </div>
  );
}
      
