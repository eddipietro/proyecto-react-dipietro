import promoravioles from '../assest/promoravioles.jpg'
import sorrentinosjyq from '../assest/sorrentinosjyq.jpg'
import ñoquis from '../assest/ñoquis.jpg'
import promoñoquis from '../assest/promoñoquis.jpg'
import fideos from '../assest/fideos.jpg'
import caseritos from '../assest/caseritos.jpg'
import canelones from '../assest/canelones.jpg'
import lasagna from '../assest/lasagna.jpg'
import promo from '../assest/promo1.jpg'
import salsabolo from '../assest/bolognesa.jpg'
import ricota from '../assest/ricota.jpg'
import rjyq from '../assest/rjyq.jpg'
import ryv from '../assest/ryv.jpg'
import pjyq from '../assest/pjyq.jpg'
import pyv from '../assest/pyv.jpg'
import promofideos from '../assest/promofideos.jpg'
import promocinta from '../assest/promocinta.jpg'
import fileto from '../assest/fileto.jpg'
import mixta from '../assest/mixta.jpg'
import blanca from '../assest/blanca.jpg'
import pesto from '../assest/pesto.jpg'




  const productos = [
    {id:1, name:' Promo de Ravioles', price:200, img: promoravioles , stock:100,  category: 'ravioles' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:2, name:'Promo de Ñoquis', price:200, img:promoñoquis, stock:100,  category:  'ñoquis', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:3, name:' Promo de Fideos Finitos', price:200, img:promofideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:4, name:'Ravioles Ricota y Verdura', price:200, img: ryv , stock:100,  category: 'ravioles' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:5, name:'Ravioles de Jamon y Queso', price:200, img:rjyq, stock:100,  category: 'ravioles', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:6, name:'Ravioles de Ricota', price:200, img:ricota, stock:100,  category: 'ravioles', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:7, name:'Ravioles de Pollo Jamon y Queso', price:200, img:pjyq, stock:100,  category: 'ravioles', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:8, name:'Ravioles de Pollo y Verdura', price:200, img:pyv, stock:100,  category: 'ravioles', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:9, name:'Ñoquis de Papa', price:200, img:ñoquis, stock:100,  category:  'ñoquis', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:10, name:'Ñoquis de Ricota', price:200, img:ñoquis, stock:100,  category:  'ñoquis', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:11, name:'Ñoquis de Calabaza', price:200, img:ñoquis, stock:100,  category:  'ñoquis', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:12, name:'Ñoquis de Verdura', price:200, img:ñoquis, stock:100,  category:  'ñoquis', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:13, name:'Ñoquis Tricolor', price:200, img:ñoquis, stock:100,  category:  'ñoquis', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:14, name:'Fideos Cinta al Huevo', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:15, name:'Fideos Cinta de Morron', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:16, name:'Fideos Cinta de Espinaca', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:17, name:'Fideos Cinta de Remolacha', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:18, name:'Fideos Finitos al Huevo', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:19, name:'Fideos Finitos de Morron', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:20, name:'Fideos Finitos de Espinaca', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:21, name:'Fideos Finitos de Calabaza', price:200, img:fideos, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:22, name:'Canelones de Ricota', price:200, img:canelones, stock:100,  category: 'canelones', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:23, name:'Canelones de Ricota y Verdura', price:200, img:canelones, stock:100,  category: 'canelones', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:24, name:'Canelones de Ricota Jamon y Queso', price:200, img:canelones, stock:100,  category: 'canelones', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:25, name:'Salsa Fileto', price:200, img:fileto, stock:100, category: 'salsas' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:26, name:'Salsa Blanca', price:200, img:blanca, stock:100, category: 'salsas' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:27, name:'Salsa Bolognesa', price:200, img:salsabolo, stock:100, category: 'salsas' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:28, name:'Salsa Mixta', price:200, img:mixta, stock:100, category: 'salsas' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:29, name:'Salsa Pesto', price:200, img:pesto, stock:100, category: 'salsas' , descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:30, name:' Promo de Fideos Cinta', price:200, img:promocinta, stock:100,  category:  'fideos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},
    {id:31, name:' Sorrentinos de Jamon y Queso', price:200, img:sorrentinosjyq, stock:100,  category:  'sorrentinos', descripcion: 'lalalalallalalalalalalallalaallaalalalalalla'},

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