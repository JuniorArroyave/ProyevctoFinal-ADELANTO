import { Link } from 'react-router-dom'
import './signin.css'

export const SignIn = () => {
  return (
    <>
      <div className='container__signin'>
        <div className='container__form'>
          <h2 className='container__title__form'>Iniciar sesión</h2>
          <div className='title__form__signin'><box-icon name='book-open' color='black' size='18px' />
            <p className='text__title__form__signin'>Virtual Schedule</p>
          </div>
          <div className='list__buttons__form'>
            <div className='list__buttons__div2'>
              <input className='inputs__form' placeholder='Correo' type='text' />
              <input className='inputs__form' placeholder='Contraseña' type='password' />
            </div>
          </div>
          <button className='SigninButton'>Iniciar Sesión</button>
          <Link className='RegisrerButtonRedirect' to='/register'>¿Aún no tienes una cuenta?</Link>
        </div>
      </div>
    </>
  )
}
