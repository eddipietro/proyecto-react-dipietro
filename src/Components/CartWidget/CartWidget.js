
import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';


const CartWidget = () => {

  const { getQtyCarProducts } = useContext(cartContext);
  return (
     <>
        <Link to='/cart' ShoppingCartIcon color="success" fontSize="large" > </Link>
        <p>{getQtyCarProducts}</p>
    </>
  )
}

export default CartWidget