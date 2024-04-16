import logo from "../assets/imagenes/logo-kine.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: 'black' }}>
            <div className="row">
                <div className="col"></div>
                <div className="col-md-12 text-center">
                    <a href="/">
                        <img src={logo} alt="kine" width={320} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Productos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Quienes somos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contactos</a>
  </li>

</ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
