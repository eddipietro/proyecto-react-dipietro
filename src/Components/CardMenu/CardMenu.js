import ravioles from "../../assest/ravioles.jpg"
import canelones from "../../assest/canelones.jpg"
import fideos from "../../assest/fideos.jpg"
import ñoquis from "../../assest/ñoquis.jpg"
import sorrentinos from "../../assest/sorrentinos.jpg"

import "./CardMenu.css"

const CardMenu = () =>{
    return(
    <div className="body">
        <div className="cardMenu">
        <div 
            class="slide" 
            style="background-image: url(https://images.unsplash.com/photo-1561234311-a9e16fa60b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
        >
             <img src={ravioles} alt=""/>
            <h3>Ravioles</h3>
        </div>
        <div 
            class="slide" 
            style="background-image: url(https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80)"
        >
            <img src={canelones} alt=""/>
            <h3>Canelones</h3>
        </div>
        <div 
            class="slide active" 
            style="background-image: url(https://images.unsplash.com/photo-1620562423895-ad4924643d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)"
        >
            <img src={sorrentinos} alt=""/>
            <h3>Sorrentinos</h3>
        </div>
        <div 
            class="slide" 
            style="background-image: url(https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
        >
            <img src={fideos} alt=""/>
            <h3>Fideos</h3>
        </div>
        <div
            class="slide" 
            style="background-image: url(https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80)"
        >
            <img src={ñoquis} alt=""/>
            <h3>Ñoquis</h3>
        </div>
    </div>
</div>
    )
}
export default CardMenu