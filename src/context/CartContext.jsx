import React, { createContext, useState, useEffect } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

// IMPOTANTEEE   --- ME FALTA REALIZAR LA CONSIGNA
// DEL DESAFIO QUE ES QUE LOS PRODUCTOS 
// NO SE DUPLIQUEN A LA HORA DE SUMARSE EN EL CARRITO.

const CartCustomProvider = ({ children }) => {
  // Productos del Carrito y Modif Productos del Carrito
  const [productosCart, setProductosCart] = useState([]);
  const [qtyProductos, setQtyProductos] = useState(0);

  useEffect(() => {
    getQtyCarProductos();
  }, [productosCart]);

  const addCartProducto = (producto) => {
    if (isInCart(producto.id)) {
      const found = productosCart.find((p) => p.id === producto.id);
      const index = productosCart.indexOf(found);
      const aux = [...productosCart];
      aux[index].qty += producto.qty;
      setProductosCart(aux);
    } else {
      setProductosCart([...productosCart, producto]); //setProductosCart nose si va 
    }
  };

  const deleteCartProducto = (id) => {
    productosCart.filter((productoCart) => productoCart.id !== id);
  };

  const isInCart = (id) => {
    return productosCart.some((productoCar) => productoCar.id === id);
  };

  const getQtyCarProductos = () => {
    let qty = 0;
    productosCart.forEach((productoCart) => (qty += productoCart.qty));
    setQtyProductos(qty);
  };

  const clearCart = () => {
    setProductosCart([]);
    setQtyProductos(0);
  };

  return (
    <Provider
      value={{
        productosCart,
        addCartProducto,
        getQtyCarProductos,
        deleteCartProducto,
        clearCart,
        qtyProductos,
      }}
    >
      {children};
    </Provider>
  );
};

export default CartCustomProvider;
