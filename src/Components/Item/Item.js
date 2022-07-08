import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'


const Item = ({product}) => {
  const {img, name}= product

  return (
    <section  className='contenedor-categoria'>
          <div className="cardBox" >
          <img src={img}className="card-img-top"  alt={name}/>
        
          <Link to={`/detail/${product.id}`} className='btn btn-primary btnVerMas'>Ver más</Link>
          
          </div>
    </section>

  )
}

export default Item