import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetailConainer/ItemDetail"
import { getData } from "../../mocks/fakeApi"
import { getProd } from "../../mocks/fakeApi"

const ItemDetailContainer = ({ saludo }) => {
  const [destacado, setDestacado]=useState({})
  const [loading, setLoading]=useState(true)
  

    useEffect(()=> {
      getProd()
         .then((result)=>setDestacado(result))
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false) )
    }, [])

    console.log(destacado)
    return( 
        <div>
         
         {loading ? <p>Cargando...</p> :  <ItemDetail destacado={destacado}/> }
      
      </div>

    )
}
export default ItemDetailContainer
