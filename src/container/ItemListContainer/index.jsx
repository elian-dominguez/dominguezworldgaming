import { useEffect, useState } from 'react'
import './style.css'
import ItemList from '../../components/ItemList'
import { getFetch } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams() // hook de react router dom

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, "productos")

    if(categoriaId){ 
    const queryFilter = query(queryCollection,
      where('categoria', '==', categoriaId))

    getDocs(queryFilter)
      .then(resp => setGames(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

    } else {
    getDocs(queryCollection)
      .then(resp => setGames(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)) 
    }
  }, [categoriaId])
  console.log(games)
  console.log(categoriaId)
  
  // useEffect(() => {
  //   if(categoriaId){
  //     getFetch // funcion que simula una api
  //       //.then(result => {
  //       //     //throw new Error ("Esto es un error") // Instanciando un error
  //       //     console.log(result)
  //       //     return result
  //       // })
  //       .then(result => setGames(result.filter(item => item.categoria === categoriaId)))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false)) // Lo lógico es que usemos un then para cada tarea
  // } else {
  //     getFetch
  //       .then(result => setGames(result))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false)) 
  //   }
  // }, [categoriaId])
  // console.log(categoriaId)


  // Traigo todos los productos
  // useEffect(() => {
  //   const querydb = getFirestore()
  //   const queryCollection = collection(querydb, "productos")

  //   getDocs(queryCollection)
  //     .then(resp => setGames(resp.docs.map(item => ({ id: item.id, ...item.data()}) ) ))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false)) 
  // }, [])
  // console.log(games)

  return (
        // <h1 className='greeting'>{props.greeting}</h1>
        <ItemList loading={loading} games={games} />
  )
}
