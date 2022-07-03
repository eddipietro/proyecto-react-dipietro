import ravioles from '../assest/ravioles.jpg'
import sorrentinos from '../assest/sorrentinos.jpg'
import ñoquis from '../assest/ñoquis.jpg'
import fideos from '../assest/fideos.jpg'
import caseritos from '../assest/caseritos.jpg'
import canelones from '../assest/canelones.jpg'
import lasagna from '../assest/lasagna.jpg'
import promo from '../assest/promo1.jpg'

const productos = [
    {id:'01', name:'ravioles', price:200, img: ravioles , stock:100},
    {id:'02', name:'sorrentinos', price:200, img:sorrentinos, stock:100},
    {id:'03', name:'ñoquis', price:200, img:ñoquis, stock:100},
    {id:'04', name:'fideos', price:200, img:fideos, stock:100},
    {id:'05', name:'caseritos', price:200, img:caseritos, stock:100},
    {id:'06', name:'canelones', price:200, img:canelones, stock:100},
    {id:'07', name:'lasagna', price:200, img:lasagna, stock:100}
  ]

  const destacado = {
    id: 1,
    name: 'Promo',
    price: 500,
    stock: 100,
    image: promo
  }

  export const getData =new Promise ((resolve, reject)=> {
    let condicion = true
      setTimeout(()=>{
        if(condicion){
          resolve(productos)
        }else{
          reject('Algo salio mal')
        }
      },2000)
  })

  export const getProd = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(destacado);
          },2000);
      });
  };