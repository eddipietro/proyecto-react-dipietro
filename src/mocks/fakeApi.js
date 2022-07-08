import ravioles from '../assest/ravioles.jpg'
import sorrentinos from '../assest/sorrentinos.jpg'
import ñoquis from '../assest/ñoquis.jpg'
import fideos from '../assest/fideos.jpg'
import caseritos from '../assest/caseritos.jpg'
import canelones from '../assest/canelones.jpg'
import lasagna from '../assest/lasagna.jpg'
import promo from '../assest/promo1.jpg'
import salsas from '../assest/salsas.jpg'


const productos = [
    {id:1, name:'ravioles', price:200, img: ravioles , stock:100,  category: ravioles },
    {id:2, name:'sorrentinos', price:200, img:sorrentinos, stock:100,  category: sorrentinos},
    {id:3, name:'ñoquis', price:200, img:ñoquis, stock:100,  category:  ñoquis},
    {id:4, name:'fideos', price:200, img:fideos, stock:100,  category:  fideos},
    {id:5, name:'canelones', price:200, img:canelones, stock:100,  category: canelones},
    {id:6, name:'salsas', price:200, img:salsas, stock:100, category: salsas }
  ]

// video after minuto 40 realiza esta promesa
  export const getData = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 2000);
        
    });
};

const destacado = {
  id: 1,
  name: 'Promo',
  price: 500,
  stock: 100,
  image: promo,
  descripcion: "Esta es una descripcion sobre el articulo seleccionado el cual es elaborado artesanalmente y bla bla bla",
}

  export const getProd = (id) => {
      return new Promise((resolve, reject) => {
        const productoEncontrado = productos.find(
          (prod) => prod.id === Number(id)
      );
          setTimeout(() => {
            resolve( productoEncontrado);
          },2000);
      });
  };