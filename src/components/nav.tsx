import { Link } from "react-router-dom";
import { ModulesRoutes } from "../routes/router";
import logo from "../assets/logo_shop.png";
function NavBar() {
  return (
    <div className="navbar bar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="nav justify-content-end menu">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to={`${ModulesRoutes.PRODUCTS}`}
          >
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to={`${ModulesRoutes.ABOUT}`}>
            Nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`${ModulesRoutes.CONTACT}`}>
            Contactanos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link-login" to={`${ModulesRoutes.LOGIN}`}>
              Samuel
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
