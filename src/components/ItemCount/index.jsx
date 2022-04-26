import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, InputGroup, Input } from 'rsuite'

function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial)
  const [inputType, setInputType] = useState(Button)
  const [hide, setHide] = useState(true)

  const InputCount = () => {
    return (
      <div>
      <Link to='/cart' >
        <Button
          color="blue"
          appearance='primary'
          onClick={() => console.log('Ir al carrito')}
        >Ir al Carrito</Button>
      </Link>
      <Link to='/' >
        <Button
          color="green"
          appearance='primary'
          onClick={() => console.log('Terminar compra')}
        >Terminar compra</Button>
      </Link>
      </div>
    )
  }

  const ButtonCount = ({ handleInter }) => {
    return <Button 
    onClick={handleInter}
    color="green" 
    appearance="primary">
    Agregar al carrito
    </Button>
  }

  const handleInter = () => {
    setInputType('input', onAdd(count))
  }
 
  const addProduct = (num) => {
      setCount(count + num)
  }

    return (
      <> 
      { 
        hide ?
        <div style={{ width: 250, marginLeft: 50, textAlign: 'center'}}>
          <InputGroup>
            <InputGroup.Button onClick={() => addProduct(-1)} disabled={count === initial}>-</InputGroup.Button>
            <Input className='input-number' readOnly value={count} size='lg'/>
            <InputGroup.Button onClick={() => addProduct(+1)} disabled={count >= stock}>+</InputGroup.Button>
            <br/>
          </InputGroup>
          <br/>
          {
            inputType === Button ?
              <ButtonCount handleInter={handleInter}/> 
            :
              <InputCount style={{ margin: 50 }}/>
          }
        </div>
         :
         setHide(false) 
        }        
      </>
    )
  }

export default ItemCount