import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { getData } from "../../mocks/fakeApi"



function ItemDetail({ productos }) {
 
   // console.log(productos)
    // const {productList}=props
    return (
        <div>
            <h3>Producto Destacado</h3>
            <img className='imgDestacado' src={productos.img} alt={productos.name}   /> 
                <div>
                    <h1>{productos.name}</h1>
                    <h2>{productos.price}</h2>
                    <h3>{productos.stock}</h3>
                    <h3>{productos.descripcion}</h3>
                    
          <Link to={`/detail/${productos.id}`} className='btn btn-primary btnVerMas'>Ver más</Link>
          
                </div>
        </div>
    )
}

export default ItemDetail