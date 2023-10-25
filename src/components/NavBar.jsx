import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  //Vista
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Shop</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/medias">
            Medias
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/pantalones">
            Pantalones
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/remeras">
            Remeras
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/buzos">
            Buzos
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

/*const NavBar = () => {
    return (
    <div>
        <h1>NavBar</h1>
        <CartWidget icon="icono" number={5} />
    </div>
    );
};

export default NavBar;*/
