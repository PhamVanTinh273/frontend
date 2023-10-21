import "./navbar.css";
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <>
        <div className="size-navbar">
        
            <button className="size-navbar-home">S</button>
            <button className="size-navbar-home">M</button>
            <button className="size-navbar-home">L</button>
            <button className="size-navbar-home">XL</button>
            <button className="size-navbar-home">XXL</button>
        </div>
        

        <nav className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="/dogs">Dogs</Link>
            <Link to ="/checkout">My Cart</Link>
        </nav>
        </>
    );
}
export default NavBar;
