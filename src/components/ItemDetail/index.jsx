import React from "react"
import './style.css'
import { Button, Col, Container, Divider, Row } from "rsuite"
// import ItemCount from "../ItemCount"

export default function ItemDetail({game}) {
  return (
    // <Card style={{ width: '15rem' }} className='cardStyle'>
    //   <Card.Img variant="top" src={game.image} className='img' />
    //   <Card.Body className='width'>
    //     <Card.Title>{game.title}</Card.Title>
    //     <Card.Text className='text'>
    //       {game.description}
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>{game.price}</ListGroupItem>
    //   </ListGroup>
    // </Card>
    <Container>
      {/* <Sidebar><Card style={{ width: '15rem' }} className='cardStyle'>
        <Card.Img variant="top" src={game.image} className='img' />
        <Card.Body className='width'>
          <Card.Title>{game.title}</Card.Title>
          <Card.Text className='text'>
            {game.description}
          </Card.Text>
        </Card.Body> */}
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>{game.price}</ListGroupItem>
        </ListGroup>
      </Card></Sidebar> */}
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
            {game.price}
          </small>
        </p>
          <Divider />
          <br />
          <Button className="cartButton" color="green" appearance="primary">Agregar al carrito</Button>
            </Col>
            
      </Row>
    </Container>
  )
}
