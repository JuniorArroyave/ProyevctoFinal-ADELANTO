import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import { Facebook, Instagram, Logo, Whatsapp } from '../icons/icons'
import { useContext } from 'react'
import { TaskContext } from '../../../context/tasks'

export const Layout = () => {
  const { state, dispatch } = useContext(TaskContext)

  const Logout = () => {
    window.alert('¿Estas seguro que quieres cerrar sesión?')
    dispatch({ type: 'LOGOUT' })
  }
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
            {!state.user && <li><Link to='/register'>Registrarme</Link></li>}
            {!state.user && <li><Link to='/sign-in'>Iniciar Sesion</Link></li>}
            {state.user && <li><Link to='/createtask'>Tareas</Link></li>}
            {state.user && <li><button className='logout' onClick={Logout}>Cerrar Sesion</button></li>}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='footer'>
        <div className='container__footer'>
          <div className='redes'>
            <Link to='https://www.facebook.com/profile.php?id=100054311451751&mibextid=ZbWKwL'><Facebook /></Link>
            <Link><Instagram /></Link>
            <Link to='https://wa.link/rj66x0'><Whatsapp /></Link>
          </div>
          <div className='information'>
            <p className='information__footer'>John Jairo Arroyave</p>
            <p className='information__footer'>©VirtualSchedule</p>
          </div>
        </div>
      </footer>
    </>
  )
}
