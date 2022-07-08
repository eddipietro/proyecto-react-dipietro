import React, { useState } from 'react'
import canelones from "../../assest/canelones.jpg"
import ravioles from "../../assest/ravioles.jpg"
import fideos from "../../assest/fideos.jpg"
import ñoquis from "../../assest/ñoquis.jpg"
import sorrentinos from "../../assest/sorrentinos.jpg"
import tartas from "../../assest/tartas.jpg"
import "./itemCount.css"
import canelones2 from '../../assest/canelones2.jpg'

	
import 'bootstrap/dist/css/bootstrap.css';


 const ItemCount = ({stock, name, price}) => {
    const [ Card, setCard ]  = useState(0)
    const count = (value) => {
      const result = Card + value
      if (result<=stock){
        setCard(Card+value)
      }
    }

  return (
  <>
    <section>

        <div className="card boxDetalle" >
    <img src={canelones2}className="card-img-top imgCard"  alt={name}/>

    

</div>
    </section>

    <section>

        <div className="card boxDetalle boxDetalle2" >
          <h1>NOMBRE DEL PRODUCTO: {name}</h1>
          <div>
            <p>Los canelones (del italiano cannelloni) son una pasta ancha de forma rectangular que se emplea a menudo en la cocina italiana para hacer platos con carne picada, pescado (atún a ser posible), verdura, requesón o espinacas en su interior. Se suele enrollar formando un cilindro (de ahí proviene el nombre que en italiano significa «canalón»), y a veces aparece la denominación manicotti. </p>
          </div>
    <div className="card-body">
        <p className="d-flex justify-content-center ">  Precio:  $200{price}</p>  
    </div>
    <div className=' btn-lg disponibilidad d-flex justify-content-center'>
    <button className='btn btn-success btn-contador boton' onClick={()=>count(-1)}> - </button>
           <div className=' d-flex justify-content-center ' >{Card} |  {stock}  </div>
           <button className='btn btn-danger btn-contador boton' onClick={()=>count(+1)}> + </button>
           </div>
           <div className=' d-flex justify-content-center '> Stock Disponible</div>
           <button className='btn btn-primary boton'  onClick={()=>console.log(Card)}>Agregar al Carrito</button>
   
    

</div>
    </section>

</>
  )
}

export default ItemCount

//pregntarle al tutor por que no me toma price en la linea 30