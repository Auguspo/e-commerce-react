import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {getProductsByQuery } from '.../fetcher'
import CategoryProduct from './categoryProduct'

const SearchResults = () => {
    const [products, setProducts] = React.useState({
        errorMessage: '',
        data: [],
      })

    const [searchParams] = useSearchParams()
    const query= searchParams.get('s')

    useEffect(()=>{
        const fetchData = async ()=>{
            const responseObject =await getProductsByQuery(query)
        }
        fetchData()
    }, [query])

    const renderProducts = () => {
        return products.data.map(p =><CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
          )
      }
      

  return (
    <div>          

    {products.errorMessage && <div>Error: {products.errorMessage}</div>}

    {products && renderProducts()}
    </div>
  )
}

export default SearchResults