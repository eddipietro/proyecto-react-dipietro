import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetailConainer/ItemDetail"
import { getProd } from "../../mocks/fakeApi"
import espaguetis from '../../assest/espaguetis.gif'
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({ saludo }) => {
  const [productos, setProductos]=useState({})
  const [loading, setLoading]=useState(true)

  const { id } = useParams();
  console.log(id)

    useEffect(()=> {
      setLoading(true);
      getProd(id) 
      
         .then((result)=> setProductos(result))
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false) )
    }, [id])

    //console.log(productos)
    return( 
        <div>
         
         {loading ?  <img src={espaguetis} className="gif"/> :
          <ItemDetail productos={productos}/> }
      
      </div>

    )
}
export default ItemDetailContainer
