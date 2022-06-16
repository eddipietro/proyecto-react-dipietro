import logo from "../../assest/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cyan } from '@mui/material/colors';
import "../Header.css"

const Header = () =>{
    return(
        <header className="header">
            <img src={logo} alt=""/>
            
            <nav>
                <a href="">NOSOTROS</a>
                <a href="">CONTACTO </a>
                <a href="">PRODUCTOS</a>

                
            </nav>
            <ShoppingCartIcon sx={{ color: cyan[50] }} />
        </header>

    )
}
export default Header