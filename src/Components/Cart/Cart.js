
import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext';

const Cart = () => {
  
  const { qtyProductos } = useContext(cartContext);

  return (
    <div>
      <h1>Este es el Carrito y su cantidad de productos agregados son:   {qtyProductos}</h1>

      </div>
  )
}

export default Cart