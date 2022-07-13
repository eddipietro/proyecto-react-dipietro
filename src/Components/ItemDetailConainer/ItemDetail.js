import React, { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { getData } from "../../mocks/fakeApi"
import ItemCount from '../ItemCount/itemCount'




function ItemDetail({ productos })  {

    const [bytFinalized, setFinalized] = useState(false)
    const { addCartProducto } = useContext (cartContext)

    const [amount, setAmount] = useState(1);
    const [visibleCounter, setVisibleCounter] = useState(true);


 const onAdd = (qty) => {
    addCartProducto({...productos, qty: qty});
    //setBuyFinalized(true);
    setVisibleCounter(false);
// crear un ob // const productoCart= {...productos, aty: count}
//agregarUsuario(productoCart)
}

const modifyAmount = (value) => {
    const result = amount + value;

    if(result <= productos.stock && result >=1){
       setAmount(amount + value);
    }
}

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
                    


                    {visibleCounter ? 
                    <ItemCount  stock={productos.stock} initial={0} img={productos.img} amount={amount} modify={modifyAmount}  onAdd={onAdd } /> : <button className='add-btn'><Link to='/cart'>Finalizar Compra</Link></button>
                    
                    }
       
          
                </div>
        </div>
    )
}

export default ItemDetail