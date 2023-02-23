import React from 'react'
import { useParams } from 'react-router-dom'

import { getProductById } from '../fetcher'
import CategoryProduct
 from './categoryProduct'
const Category = ({id, title, onCategoryClick}) => {
  const [products, setProducts] = React.useState({
    errorMessage: '',
    data: [],
  })
  const {categoryId} = useParams()

  React.useEffect(() => {
    const fetchData = async () => {
        const responseObject = await getProductById(categoryId);
        setProducts(responseObject);
    };
    fetchData();
}, [categoryId]);


const renderProducts = () => {
  return products.data.map(p =><CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
    )
}

  return (
    <div>          

    {products.errorMessage && <div>Error: {products.errorMessage}</div>}

    {products && renderProducts()}</div>
  )
}

export default Category