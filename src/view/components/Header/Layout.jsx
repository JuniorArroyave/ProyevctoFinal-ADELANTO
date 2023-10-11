import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import 'boxicons'

export const Layout = () => {
  return (
    <>
      <header className='header'>
        <Link to='/'><box-icon name='book-open' color='#f9f5f5' size='md' /></Link>
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
        <div className='container__footer'>
          <div className='redes'>
            <box-icon name='facebook-square' size='md' color='#7d8580' type='logo' animation='tada' />
            <box-icon name='instagram' size='md' color='#7d8580' type='logo' animation='tada' />
            <box-icon name='whatsapp' size='md' color='#7d8580' type='logo' animation='tada' />
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
