import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import { Facebook, Instagram, Logo, Whatsapp } from '../icons/icons'

/* <li><Link to='/services'>Servicios</Link></li> */

export const Layout = () => {
  return (
    <>
      <header className='header'>
        <div className='container__title'>
          <Logo />
          <h1 className='header__title'>Virtual Schedule</h1>
        </div>
        <nav className='header__menu'>
          <ul className='header__list'>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/register'>Registrarme</Link></li>
            <li><Link to='/sign-in'>Iniciar Sesion</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='footer'>
        <div className='container__footer'>
          <div className='redes'>
            <Facebook />
            <Instagram />
            <Whatsapp />
          </div>
          <div className='information'>
            <p className='information__footer'>Jacobo Garcés -- Mentor</p>
            <p className='information__footer'>©VirtualSchedule</p>
          </div>
        </div>
      </footer>
    </>
  )
}
