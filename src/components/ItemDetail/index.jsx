import React from "react"
import './style.css'
import { Col, Container, Divider, Row } from "rsuite"
import ItemCount from "../ItemCount"
import { useCartContext } from "../../context/CartContext";
// import ItemCount from "../ItemCount"

export default function ItemDetail({game}) {

  const { addToCart, cartList} = useCartContext()

  const onAdd = (count) => {
    console.log(count)
    // alert(`Agregaste ${count} juegos`);
    addToCart({ ...game, cantidad: count })
    console.log(game)
  }
  console.log(cartList)

  return (
    <Container>
      <Row className="show-grid">
        <Col xs={8}> <img src={game.image} height="400" width="300px" /></Col>
        <Col xs={8}> <p>
          <small>
            {game.title}
          </small>
        </p>
          <Divider />
          <p>
            <small>
              {game.description}
            </small>
          </p>
          <Divider />
        </Col>
        <Col xs={8}>          
        <p>
          <small>
            PRECIO 
          <br/>
            ${game.price}
          </small>
        </p>
          <Divider />
          <br />
          <ItemCount stock={10} initial={1} onAdd={onAdd}  />
          {/* <Button className="cartButton" color="green" appearance="primary">Agregar al carrito</Button> */}
            </Col>
            
      </Row>
    </Container>
  )
}
