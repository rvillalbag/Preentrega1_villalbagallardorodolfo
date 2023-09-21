
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-comtainer">
        <nav className="navbar">
        <h1 className="navbar-logo"> SHOP </h1>
        <Link className="seeCarrito" to={"/cart"}>💵</Link>
        </nav>
    </div>
  )
}

export default Navbar