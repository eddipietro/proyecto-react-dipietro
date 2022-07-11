import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'


function ItemList({ productList }) {
 //   console.log(productList)
   //  const {productList}=props

    return (
        <div>
            <h3>Lista de productos</h3>
            
            <div className='borde' >
                {productList.map((product) => <Item key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default ItemList