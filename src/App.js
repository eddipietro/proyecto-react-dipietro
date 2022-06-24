import ItemListContainer from "./Components/ItemListContainer/itemListContainer";
import Header from "./Components/Header/Header";
import ItemCount from "./Components/ItemCount/itemCount";



const App = () =>{
  return (
    <>
     < Header /> 
     < ItemListContainer saludo="Bienvenidos a mi Ecommerce"/>
     < ItemCount stock={5} name={'Canelones'}/>
    </>
  )
}

export default App



