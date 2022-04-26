import React from 'react';
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams() // hook de react router dom

useEffect(() => {
  const querydb = getFirestore()
  const queryCollection = collection(querydb, "productos")
  const queryFilter = categoryId ? 
                        query(queryCollection,
                          where('category', '==', categoryId)
                        )
                      :
                      queryCollection

      getDocs(queryFilter)
      .then(resp => setGames(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [categoryId])
  console.log(games)
  console.log(categoryId)

  return (
        <ItemList loading={loading} games={games} />
  )
}

// ningun console.log                           SOLO QUEDA BORRAR, PERO LISTO!
// no español/inglés                            LISTO!!
// ningun warning ni errores en console web     LISTO!!
// nada de codigo comentado                     SOLO QUEDA BORRAR, PERO LISTO!
// identacion: utilizar sangrado (mover ligeramente hacia la derecha)     LISTO!!
// optimizar, no duplicar cod                   LISTO (PRINCIPAL)
// acomodar el cart en minimo dos componentes hijos       LISTO (PRINCIPAL)
// nombres significativos a las variables o const         LISTO!
// eliminar dependencias que no se usa                LISTO!
// tener un solo style, en app.js                     LISTO!
// crear formulario de compra                         LISTO!

// el read.me tiene que tener:
// librerias externas
// las versiones y el para que de cada una
// demo: link