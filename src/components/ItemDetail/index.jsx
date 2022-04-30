import React from "react"
import { Col, Container, Divider, Row } from "rsuite"
import ItemCount from "../ItemCount"
import { useCartContext } from "../../context/CartContext";

export default function ItemDetail({game}) {

  const { addToCart } = useCartContext()

  const onAdd = (count) => {
    addToCart({ ...game, quantity: count })
  }

  return (
    <Container>
      <Row className="show-grid">
        <Col xs={8}> <img src={game.image} height="400" width="300px" /></Col>
        <Col xs={8}> 
          <p>
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
          <br/>
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </Col>
      </Row>
    </Container>
  )
}
