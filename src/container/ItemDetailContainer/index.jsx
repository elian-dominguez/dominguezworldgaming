import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Spinner from 'react-bootstrap/Spinner'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer() {

  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(true)
  const { detalleId } = useParams()

  // Especifico un producto
  useEffect(()=> {
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'productos', detalleId) //En vez de hardcodear el Id le paso el params

    getDoc(queryProd) //Si traigo uno solo utilizo {} para objeto, sino [] para array
    .then(resp => setGame({ id: resp.id, ...resp.data() }))
    .catch(err => console.log(err))
    .finally(() => setLoading(false)) 
  }, [])
  console.log(game)

  // useEffect(() => {
  //   if(detalleId){
  //     getFetch
  //       .then(result => setGame(result.find(item => item.id === detalleId)))
  //       .then(result => console.log(result))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false)) 
  //   } else {
  //     getFetch
  //       .then(result => setGame(result))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false)) 
  //   }
  // }, [detalleId])

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
