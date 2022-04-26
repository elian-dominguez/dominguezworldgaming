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
    const queryProd = doc(querydb, 'productos', detailId) //En vez de hardcodear el Id le paso el params

    getDoc(queryProd) //Si traigo uno solo utilizo {} para objeto, sino [] para array
      .then(resp => setGame({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
  }, [])
  console.log(game)
  console.log(detailId)

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
