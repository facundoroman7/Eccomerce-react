import { useEffect, useState } from 'react'
import '../hoja-de-estilo/itemsListContainer.css'
import ItemList from './ItemList';

const ItemListContainer = () => {

  const [product , setProduct] = useState([])
  

  useEffect (() =>{
    getProduct().then((product) => setProduct(product))
    
  }, [])

  const getProduct = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    
    
    return data
  }


  return (
    <div className='producto-tarjeta'>
        <ItemList product= {product} />
    </div>
  )
}

export default ItemListContainer