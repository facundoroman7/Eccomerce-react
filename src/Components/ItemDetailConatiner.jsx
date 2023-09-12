import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import '../hoja-de-estilo/itemsListContainer.css'
const ItemDetailConatiner = () => {

    const [product, setProduct] = useState([]);


  useEffect(() => {
    getProduct().then((product) => setProduct(product))
  }, [])

  

  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()
    return data
  }
  
  
  return (
    <div className='producto-tarjeta'>
 
      
      {
          product.map((p) =>{
          return(
          <ItemDetail product={p} key={p.id} />
          )
        })

      }
        
    </div>
  )
}

export default ItemDetailConatiner