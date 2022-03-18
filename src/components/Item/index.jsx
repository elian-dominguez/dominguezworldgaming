import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './style.css'

function Item({title, description, image, price}) {
    return (
        <Card style={{ width: '15rem' }} className='cardStyle'>
            <Card.Img variant="top" src={image} className='img'/>
            <Card.Body className='width'>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='text'>
                    {description}
                </Card.Text>   
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{price}</ListGroupItem>
            </ListGroup>
            <Button variant="primary">Comprar</Button>
        </Card>
    )
}

export default Item