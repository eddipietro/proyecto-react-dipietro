import React, { useState } from 'react'
import canelones from "../../assest/canelones.jpg"
import ravioles from "../../assest/ravioles.jpg"
import fideos from "../../assest/fideos.jpg"
import ñoquis from "../../assest/ñoquis.jpg"
import sorrentinos from "../../assest/sorrentinos.jpg"
import tartas from "../../assest/tartas.jpg"
import "./itemCount.css"
	
import 'bootstrap/dist/css/bootstrap.css';


 const ItemCount = ({stock, name}) => {
    const [ Card, setCard ]  = useState(0)
    const count = (value) => {
      const result = Card + value
      if (result<=stock){
        setCard(Card+value)
      }
    }

  return (
    <section className='row bg-info'>
        <div className='col-4'></div>
        <div className='col-4 justify-content-center' >
            <h3 className='py-3 bg-white'>
            {name}
        </h3>
        <img src={canelones} width='150px' alt="placeholder"/>
        <h4>Precio: $<span className='price'>200</span></h4>
        </div>
        <div className='col-4 d-flex flex-row display-3 justify-content-arrow align-items-center'>
           <button className='btn btn-success' onClick={()=>count(-1)}> - </button>
           <span className='disponibilidad d-flex justify-content-center ' >{Card} - {stock} </span>
           <button className='btn btn-danger' onClick={()=>count(+1)}> + </button>
           <button onClick={()=>console.log(Card)}>Agregar al Carrito</button>
        </div>
        
    </section>
  )
}

export default ItemCount