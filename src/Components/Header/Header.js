import logo from "../../assest/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cyan } from '@mui/material/colors';
import "./Header.css"
import { Link , NavLink} from'react-router-dom';


const Header = () =>{

  const categories = [
    { name: "Home", id: 0, route: "/"},
    { name: "Ravioles", id: 1, route: "/category/ravioles" },
    { name: "Sorrentinos", id: 2, route: "/category/sorrentinos" },
    { name: "Ñoquis", id: 3, route: "/category/ñoquis" },
    { name: "Fideos", id: 4, route: "/category/fideos" },
    { name: "Canelones", id: 5, route: "/category/canelones" },
    { name: "Salsas", id: 6, route: "/category/salsas" },
];
    return(
        <header className="wrapper">
          <Link  to="/">   
          <img className="img-logo" src={logo} alt={logo.name}/>
          </Link>
            <nav>
                {categories.map((category) => <NavLink to={category.route} key={category.id} className="categorias" >{category.name}</NavLink>)}
              </nav>
              <Link to="/cart/:id"> <ShoppingCartIcon sx={{ color: cyan[50] }} /></Link>
        </header>
    )
}

export default Header


