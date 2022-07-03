import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/itemCount'
import { BrowserRouter } from 'react-router-dom'

//aca falta importar lo de browser router
import {
   //BrowserRouter,
   Router,
   Route,
} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailConainer/ItemDetailContainer'

const App = () =>{
  return (
    //aca falta importar lo de brouser router <BrouserRouter></>
    
    < BrowserRouter>
       < Header /> 
       < ItemCount stock={5} name={'Canelones'}/>
       < ItemListContainer saludo="Bienvenidos a mi Ecommerce"/>
       < ItemDetailContainer />
    </BrowserRouter>
    
  )
}

export default App
