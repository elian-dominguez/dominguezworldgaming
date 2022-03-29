import { useEffect, useState } from 'react'
import './style.css'
import ItemList from '../../components/ItemList'
import { getFetch } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams() // hook de react router dom

  useEffect(() => {
    if(categoriaId){
      getFetch // funcion que simula una api
        //.then(result => {
        //     //throw new Error ("Esto es un error") // Instanciando un error
        //     console.log(result)
        //     return result
        // })
        .then(result => setGames(result.filter(item => item.categoria === categoriaId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) // Lo lógico es que usemos un then para cada tarea
  } else {
      getFetch
        .then(result => setGames(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    }
  }, [categoriaId])

  
  console.log(categoriaId)
  return (
        // <h1 className='greeting'>{props.greeting}</h1>
        <ItemList loading={loading} games={games} />
  )
}
