import React, { useState } from 'react'
import "./itemCount.css"
import 'bootstrap/dist/css/bootstrap.css';




 const ItemCount = ({stock, name, price, descripcion,modify, initial,  onAdd, amount}) => {
   const [ Card, setCard ]  = useState(0)
    const count = (value) => {
      const result = Card + value
      if ((result<=stock )&( result >=initial)) {
        setCard(Card+value) 
      }
    }

  return (
  <>


    <section>

        <div className="card boxDetalle boxDetalle2" >
          <h1 src={name} >NOMBRE DEL PRODUCTO: {name}</h1>
          <p>Descripcion del producto: {descripcion}</p>
          <div>
            
          </div>
          <div className="card-body">
              <p className="d-flex justify-content-center ">  Precio: $ {price}</p>  
          </div>
          <div className=' btn-lg disponibilidad d-flex justify-content-center'>
          <button className='btn btn-success btn-contador boton' onClick={()=>count(-1)}> - </button>
           <div className=' d-flex justify-content-center ' >{Card} |  {stock}  </div>
           <button className='btn btn-danger btn-contador boton' onClick={()=>count(+1)}> + </button>
           </div>
           <div className=' d-flex justify-content-center '> Stock Disponible</div>
           <button className='add-btn botoncito' onClick={() => onAdd(Card)}>Agregar al Carrito</button>



</div>
    </section>

</>
  )
}

export default ItemCount

//pregntarle al tutor por que no me toma price en la linea 30