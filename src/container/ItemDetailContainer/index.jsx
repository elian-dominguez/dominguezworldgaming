import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Col, Grid, Loader, Row } from 'rsuite'

export default function ItemDetailContainer() {

  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(true)
  const { detailId } = useParams()

  // Especifico un producto
  useEffect(()=> {
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'productos', detailId) 

    getDoc(queryProd) 
      .then(resp => setGame({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setTimeout(() => {
                        setLoading(false)
                          }, 500)) 
  }, [])

  return (
    <Grid>
      <Row className='show-grid'>
        {
          loading ? 
            <Loader backdrop size="md" content="Cargando producto.." vertical/> 
            :
            <Col key={game.id}>
              <ItemDetail game={game} />
            </Col>
        }
      </Row>
    </Grid>
  )
}
