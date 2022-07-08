import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getData } from "../../mocks/fakeApi"
import espaguetis from '../../assest/espaguetis.gif'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from "react-router-dom"


const ItemListContainer = ({ saludo }) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true);


  const { categoryId } = useParams();
  console.log(categoryId);
  
    useEffect(()=> {
      setLoading(true);
      getData(categoryId)

      .then((result)=>setProductList(result))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false) )
    }, [categoryId])

   
    return( 
        <div>
         <h1>{saludo}</h1> 
         {loading ? <img src={espaguetis} className="gif" /> :  <ItemList productList={productList}/> }
      
      </div>

    )
}
export default ItemListContainer
