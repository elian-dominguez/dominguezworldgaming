import React from 'react'
import {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial)

    const addProduct = (num) => {
        setCount(count + num)
    }
    return (
      <>
        <h1>{count}</h1>
        <div className='button-counter'>
                <button onClick={() => addProduct(-1)} disabled={count === initial}>-</button>
                <button onClick={() => addProduct(+1)} disabled={count >= stock}>+</button> 
            <br />
              <button onClick={() => onAdd(count)}>Agregar</button>
        </div>
      </>
  )
}

export default ItemCount