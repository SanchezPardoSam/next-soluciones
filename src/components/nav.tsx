import { Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModulesRoutes } from "../routes/router";

function NavBar() {
  return (
    <Container>
      <img className="d-block w-100" src="../assets/logo_shop.png" alt="Logo" />
      <Nav className="justify-content-end">
        
          <Link
            to={`.${ModulesRoutes.PRODUCTS}`}
            className="nav-link link-dark"
          >
            PRODUCTOS
          </Link>
        
        <Link
            to={`.${ModulesRoutes.ABOUT}`}
            className="nav-link link-dark"
          >
            NOSOTROS
          </Link>
        
        <Link
            to={`.${ModulesRoutes.CONTACT}`}
            className="nav-link link-dark"
          >
            CONTACTANOS
          </Link>
        
          <Button variant="primary">Ingresar</Button>{" "}
        
      </Nav>
    </Container>
  );
}

export default NavBar;
