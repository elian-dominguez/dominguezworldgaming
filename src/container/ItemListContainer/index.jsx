import React from 'react';
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams() // Hook de react router dom

useEffect(() => {
  const querydb = getFirestore()
  const queryCollection = collection(querydb, "productos")
  const queryFilter =  categoryId ? 
                        query(queryCollection,
                          where('category', '==', categoryId)
                        )
                      :
                      queryCollection

      getDocs(queryFilter)
      .then(resp => setGames(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch(err => console.log(err))
      .finally(() => setTimeout(() => {
                        setLoading(false)
                          }, 1000))
  }, [categoryId])

  return (
        <ItemList loading={loading} games={games} />
  )
}