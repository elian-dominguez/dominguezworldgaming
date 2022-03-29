import Item from '../Item'
import './style.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Spinner from 'react-bootstrap/Spinner'

function ItemList({loading, games}) {
    return (
        <Container>
            <Row>
            { loading ? <Spinner animation="border" variant="warning" className='spinner'/> :
            games.map(game => (
                <Col md={4} sm={8} key={game.id}>
                    <Item id={game.id} title={game.title} description={game.description} image={game.image} price={game.price} />
                </Col>
                // <FlexboxGrid justify="space-around">
                //     <Item colspan={4} id={game.id} title={game.title} description={game.description} image={game.image} price={game.price} />
                // </FlexboxGrid>
                // <Col md={6} sm={8} key={game.id}>
                //     <Item id={game.id} title={game.title} description={game.description} image={game.image} price={game.price} />
                // </Col>
            ))
            }
            </Row>
        </Container >
    )
}

export default ItemList

// const getFetch = new Promise((resolve, reject) => {
//     let condition = true
//     if (condition) {
//         setTimeout(() => {
//             resolve(games)
//         }, 3000)
//     } else {
//         reject("Error")
//     }
// })

// export default function ItemList() {
//     const [games, setGames] = useState([])
//     useEffect(() => {
//         getFetch.then(result => {

//         })
//     })
//     const [productos, setProductos] = useState([])
//     useEffect(() => {
//         getFetch // funcion que simula una api
//         //.then(result => {
//         //     //throw new Error ("Esto es un error") // Instanciando un error
//         //     console.log(result)
//         //     return result
//         // })
//         .then(result => setProductos(result))
//         .catch(err => console.log(err))
//         .finally(() => console.log("siempre al ultimo")) //Lo lógico es que usemos un then para cada tarea
//     }, [])

//     console.log(productos)

//   return (
//     <div>ItemList</div>
//   )
// }
