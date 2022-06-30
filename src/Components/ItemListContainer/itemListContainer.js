import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getData } from "../../mocks/fakeApi"

const ItemListContainer = ({ saludo }) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  

    useEffect(()=> {
      getData
      .then((result)=>setProductList(result))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false) )
    }, [])

    console.log(productList)
    return( 
        <div>
         <h1>{saludo}</h1> 
         {loading ? <p>Cargando...</p> :  <ItemList productList={productList}/> }
      
      </div>

    )
}
export default ItemListContainer
