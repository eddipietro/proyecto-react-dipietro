import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/itemCount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailConainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'

const App = () =>{
  return (
    < BrowserRouter>    
        < Header /> 
       <Routes>
        <Route path='/' element={  < ItemListContainer saludo="Bienvenidos a mi Ecommerce"/>  } />
        <Route path='/category/:categoryId' element={  < ItemListContainer />  } />
        <Route path='/detail/:id' element={  < ItemDetailContainer />  } /> 
        <Route path='/cart' element={  < Cart/>  } />

       </Routes>
    </BrowserRouter>
    
  )
}

    export default App



