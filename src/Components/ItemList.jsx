import Item from "./Item";

const ItemList = ({ product }) => {
  
  return (
    <div className="producto-tarjetas">
        {
          product.map((p) =>{
            return(
              <Item producto ={p} key={p.id} />

            )
          })
        }
    </div> 
  )
}

export default ItemList