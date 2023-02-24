import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProductsByQuery } from '../fetcher'
import CategoryProduct from './categoryProduct'

const SearchResults = () => {
  const [products, setProducts] = React.useState({
    errorMessage: '',
    data: [],
  })

  const [searchParams] = useSearchParams()
  const query = searchParams.get('s')

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsByQuery(query)
    }
    fetchData()
  }, [query])

  const renderProducts = () => {
    if (products.data.length > 0) {
      return products.data.map((p) => (
        <CategoryProduct key={p.id} {...p}>
          {p.title}
        </CategoryProduct>)
      )
    }
    else {
      return <div>No results found</div>
    }
  }



  return (
    <div>

      {products.errorMessage && <div>Error: {products.errorMessage}</div>}

      {renderProducts()}
    </div>
  )
}

export default SearchResults