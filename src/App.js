import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/itemCount'


const App = () =>{
  return (
    <>
     < Header /> 
     < ItemCount stock={5} name={'Canelones'}/>
     < ItemListContainer saludo="Bienvenidos a mi Ecommerce"/>
    </>
  )
}

export default App
