import React, { useEffect, useState } from 'react'
import Item from '../Item'
import './style.css'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { getFetch } from '../../helpers/getFetch'
import Spinner from 'react-bootstrap/Spinner'

function ItemList() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch // funcion que simula una api
        //.then(result => {
        //     //throw new Error ("Esto es un error") // Instanciando un error
        //     console.log(result)
        //     return result
        // })
        .then(result => setGames(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) //Lo lógico es que usemos un then para cada tarea
    }, [])
    
    console.log(games)
    return (
        <Container>
            <Row>
            { loading ? <Spinner setTimeout animation="border" variant="warning" className='spinner'/> :
            games.map(game => (
                <Col xs={6} md={4} key={game.id}>
                    <Item title={game.title} description={game.description} image={game.image} price={game.price} />
                </Col>
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
