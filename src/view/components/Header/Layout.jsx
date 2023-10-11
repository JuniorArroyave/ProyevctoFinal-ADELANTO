import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Virtual Schedule</h1>
        <nav className='header__menu'>
          <ul className='header__list'>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/services'>Servicios</Link></li>
            <li><Link to='/sign-in'>Inicias Sesion</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='footer'>
        <h1>Este es el footer</h1>
      </footer>
    </>
  )
}
