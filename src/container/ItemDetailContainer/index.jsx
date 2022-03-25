import { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { getFetch } from '../../helpers/getFetch'

export default function ItemDetailContainer() {

  const [game, setGame] = useState({})

  useEffect(() => {
    getFetch
      .then(result => setGame(result.find(videogame => videogame.id === 1)))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <ItemDetail game={game}/> 
    </>
  )
}
