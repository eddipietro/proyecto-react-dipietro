
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to='/cart' ShoppingCartIcon color="success" fontSize="large" > </Link>
  )
}

export default CartWidget