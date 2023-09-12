import { Link } from 'react-router-dom'
import '../hoja-de-estilo/NavBar.css'
import imgLogo from '../imagenes/libro.png'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'



const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>
          <Link to="/">
            <img src={imgLogo} alt="logo de la pagina" className='img-logo' />
          </Link>
          
        </div>
        <ul className='links'>
          <li>Inicio</li>
          <li>Envios</li>
          <Menu >
            <MenuButton className='link-dropdown'>
            <i className="bi bi-caret-down">libros</i>
            </MenuButton>
            <MenuList>
              <MenuItem color="black">Libro 1</MenuItem>
              <MenuItem color="black">Libro 2</MenuItem>
              <MenuItem color="black">Libro 3</MenuItem>
              <MenuItem color="black">Libro 4</MenuItem>
            </MenuList>
          </Menu>
          <li>Nosotros</li>
        </ul>

        <CartWidget />
      </nav>
      
    </header>
  )
}

export default NavBar