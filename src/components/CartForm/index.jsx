import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { Message, toaster } from 'rsuite';
import { useCartContext } from '../../context/CartContext';
import { useForm } from "react-hook-form";

export default function CartForm() {
    const { register } = useForm()
    const { cartList, clearCartList, itemsPrice } = useCartContext()
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        textarea: ''
    });

    const generateOrder = async (e) => {

        e.preventDefault();

        let order = {
            buyer: formValue,

            items: cartList.map(cartItem => {
                const id = cartItem.id
                const title = cartItem.title
                const price = cartItem.price
                const quantity = cartItem.quantity

                return { id, title, price, quantity }
            }),
            total: itemsPrice()
        }
        
        // Creacion de un documento
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(result => {
                return result
            })
            .then(result => toaster.push(<Message duration={4000} type='success'>
                <b>¡Compra realizada exitosamente!</b>
                <hr style={{ color: 'black', margin: 5 }} /><br />
                ID de orden de compra: {result.id} </Message>))
            .catch(err => console.log(err))
            .finally(() => clearCartList())
    }

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
        {
        cartList.length !== 0
            ?
        <div className="login-box">
            <h4>Datos de compra</h4>
            <form onSubmit={(e) => generateOrder(e)}>
                <div className="user-box">
                    <input type="text" name="name" required {...register('name', {
                        required: true,
                        maxLength: 10
                    })} onChange={handleChange} value={formValue.name} />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                        <input type="text" name='email' required {...register('email', {
                        required: {
                            value: true,
                            message: "El campo es requerido"
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                            message: "El formato no es correcto"
                        }
                    })} onChange={handleChange} value={formValue.email} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                                <textarea type="text" name="textarea" required {...register('textarea', {
                                    required: true,
                                    maxLength: 100
                                })}  onChange={handleChange} value={formValue.textarea} />
                    <label>Comentarios/Observaciones</label>
                </div>
                <button className='confirm'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Confirmar
                </button>
            </form>
        </div>
            :
            cartList
            }
        </div>
    );
};

