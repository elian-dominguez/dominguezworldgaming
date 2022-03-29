import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Spinner from 'react-bootstrap/Spinner'

export default function ItemDetailContainer() {

  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(true)
  const { detalleId } = useParams()

  useEffect(() => {
    if(detalleId){
      getFetch
        .then(result => setGame(result.find(item => item.id === detalleId)))
        .then(result => console.log(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    } else {
      getFetch
        .then(result => setGame(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    }
  }, [detalleId])

  console.log(detalleId)

  return (
    <Container >
      <Row>
        {
          loading ? 
            <Spinner animation="border" variant="warning" className='spinner' /> 
            :
              <Col key={game.id}>
                <ItemDetail game={game} />
              </Col>
        }
      </Row>
    </Container>
  )
}
