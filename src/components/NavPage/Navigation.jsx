import './navigation.css'
import imgFondo from '../../assets/imgStomps.png'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="menu-horizontal">

          <li>
            <a href="#">Productos</a>
            <ul className="menu-vertical">
              <li><a href="#adidas">Adidas</a></li>
              <li><a href="#nike">Nike</a></li>
              <li><a href="#vans">Vans</a></li>
              <li><a href="#puma">Puma</a></li>
            </ul>
          </li>
          <li>
            <NavLink
              to="https://wa.me/542615750680?text=Hola%20me%20interesa%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://wa.me/542615750680?text=Hola%20quería%20ver%20más%20modelos%20de%20zapatillas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Más modelos
            </NavLink>
          </li>
        </ul>
      </nav>
      <img className="img-fondo" src={imgFondo} alt="" />
    </>
  );
}
