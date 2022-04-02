import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, InputGroup, InputNumber } from 'rsuite'
import './style.css'

function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial)
  const [inputType, setInputType] = useState('button')
  const [hide, setHide] = useState(true)

  const InputCount = () => {
    return (
      <div>
      <Link to='/cart' >
        <button
          className="btn btn-primary"
          onClick={() => console.log('Ir al carrito')}
        >Ir al Carrito</button>
      </Link>
      <Link to='/' >
        <button
          className="btn btn-success"
          onClick={() => console.log('Terminar compra')}
        >Terminar compra</button>
      </Link>
      </div>
    )
  }

  const ButtonCount = ({ handleInter }) => {
    return (
      <div>
      { 
          <Button onClick={handleInter}color="green" appearance="primary">Agregar al carrito</Button>
      }
      </div>
    )
  }

  const handleInter = () => {
    setInputType('input', onAdd(count))
    setHide(false)
  }
 
  const addProduct = (num) => {
      setCount(count + num)
  }

    return (
      <> { 
        hide ?
        <div style={{ width: 250, marginLeft: 50, textAlign: 'center'}}>
          <InputGroup >
            <InputGroup.Button onClick={() => addProduct(-1)} disabled={count === initial}>-</InputGroup.Button>
            <InputNumber readOnly className={'custom-input-number'} value={count} size='lg' />
            <InputGroup.Button onClick={() => addProduct(+1)} disabled={count >= stock}>+</InputGroup.Button>
            <br />
          </InputGroup>
          <br />
          {
            inputType === 'button' ?
              <ButtonCount handleInter={handleInter} /> 
            :
              <InputCount style={{ margin: 50 }} />
          }
        </div>
         :  
        <div style={{ width: 250, marginLeft: 50, textAlign: 'center' }} >
        <InputGroup style={{display: 'none'}} >
          <InputGroup.Button onClick={() => addProduct(-1)} disabled={count === initial}>-</InputGroup.Button>
          <InputNumber readOnly className={'custom-input-number'} value={count} size='lg' />
          <InputGroup.Button onClick={() => addProduct(+1)} disabled={count >= stock}>+</InputGroup.Button>
          <br />
        </InputGroup>
            {    
          inputType === 'button' ?
            <ButtonCount handleInter={handleInter} />
          :
            <InputCount style={{ margin: 50 }} />
            }
        </div> 
       }        
      </>
    )
  }

export default ItemCount