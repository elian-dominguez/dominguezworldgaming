import React from 'react'
// import Button from 'react-bootstrap/Button'
import Button from 'rsuite/Button';
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './style.css'
import { Link } from 'react-router-dom'
import { Divider, Panel } from 'rsuite'

function Item({id, title, image, price}) {
    return (
        <div className='container' >
        <Panel className='panelContainer' shaded bordered bodyFill style={{display: 'inline-block', width: 240 }}>
            <img src={image} height="240" width="240px" />
            <Divider className='divider' />
            <Panel header={title} className='panel' >
                <Divider />
                <p>
                    <small>
                        PRECIO: {price}
                    </small>
                </p>
                <Divider />
                <p>
                    <small>
                        <Link to={`/detalle/${id}`} >
                            <Button color="orange" appearance="primary">COMPRAR</Button>
                        </Link>
                    </small>
                </p>
            </Panel>
        </Panel>
        {/* // <Card style={{ width: '15rem' }} className='cardStyle'>
        //     <Card.Img variant="top" src={image} className='img'/>
        //     <Card.Body className='width'>
        //         <Card.Title>{title}</Card.Title>
        //         <Card.Text className='text'>
        //             {description}
        //         </Card.Text>   
        //     </Card.Body>
        //     <ListGroup className="list-group-flush">
        //         <ListGroupItem>{price}</ListGroupItem>
        //     </ListGroup>
        //     <Link to={`/detalle/${id}`} >
        //         <Button variant="primary">Comprar</Button>
        //     </Link>
        // </Card> */}
        </div>
    )
}

export default Item