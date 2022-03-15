import React from 'react'
import {useState} from 'react'

export default function ItemCount() {

    const [count, setCount] = useState(0)

    const stock = 10

    const increment = () => {
        // (count < stock) ? setCount(count + 1) : alert("No hay mas stock")
        setCount(count + 1)
    }

    const decrement = () => {
        (count > 0) ? setCount(count - 1) : setCount(0)
    }
    
    const addToCart = () => {
        (count > 0) ? alert(`Agregaste ${count} productos`) : alert("Tienes que agregar productos")
    }

  return (
      <>
        <h1>{count}</h1>
        <div className='button-counter'>
            <button onClick={decrement} disabled={count == 0}>-</button>
            <button onClick={increment} disabled={count >= stock}>+</button>
            <br />
            <button onClick={addToCart}>Agregar</button>
        </div>
      </>
  )
}
