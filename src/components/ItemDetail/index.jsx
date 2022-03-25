import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export default function ItemDetail({game}) {
  return (
    <Card style={{ width: '15rem' }} className='cardStyle'>
      <Card.Img variant="top" src={game.image} className='img' />
      <Card.Body className='width'>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text className='text'>
          {game.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{game.price}</ListGroupItem>
      </ListGroup>
      <Button variant="primary">Comprar</Button>
    </Card>
  )
}
