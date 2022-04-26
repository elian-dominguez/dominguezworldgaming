import React from 'react';
import Item from '../Item'
import Loader from 'rsuite/Loader';
import { Col, Grid, Row } from 'rsuite'

function ItemList({loading, games}) {
    return (
        <Grid>
            <Row className="show-grid">
            { 
                loading ? <Loader backdrop center size="md" content="Cargando productos.." vertical/> 
            :
            games.map(game => (
                <Col className='col-size' xs={24} sm={24} md={8} key={game.id}>
                    <Item id={game.id} title={game.title} description={game.description} image={game.image} price={game.price} />
                </Col>
            ))
            }
            </Row>
        </Grid >
    )
}

export default ItemList
