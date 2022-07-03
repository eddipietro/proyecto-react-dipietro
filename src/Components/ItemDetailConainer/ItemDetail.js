import React from 'react'
import Item from '../Item/Item'
import ItemDetailContainer from './ItemDetailContainer'
import ItemCount from '../ItemCount/itemCount'

function ItemDetail({ destacado }) {
    // const {productList}=props
    return (
        <div>
            <h3>Producto Destacado</h3>
            <img src={destacado.image} alt={destacado.name}  widht="400" /> 
                <div>
                    <h1>{destacado.name}</h1>
                    <h2>{destacado.price}</h2>
                    <h3>{destacado.stock}</h3>
                    

                </div>
        </div>
    )
}

export default ItemDetail