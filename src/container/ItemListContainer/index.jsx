import { useEffect, useState } from 'react'
import './style.css'
import ItemList from '../../components/ItemList'
import { getFetch } from '../../helpers/getFetch'

export default function ItemListContainer() {
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
      .finally(() => setLoading(false)) // Lo lógico es que usemos un then para cada tarea
  }, [])
  
  console.log(games)
  return (
        // <h1 className='greeting'>{props.greeting}</h1>
        <ItemList loading={loading} games={games} />
  )
}
