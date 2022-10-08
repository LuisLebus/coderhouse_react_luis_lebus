import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid gap-5">
        <Link className="navbar-brand" to="/">
          <img src="../assets/images/logo.png" alt="Logo" width="90" />
        </Link>

        <CartWidget />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Bronce">
                Bronce
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Plata">
                Plata
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Oro">
                Oro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
