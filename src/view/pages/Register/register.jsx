import { Link } from 'react-router-dom'
import './register.css'

export const Register = () => {
  return (
    <>
      <div className='container__register'>
        <div className='container__form'>
          <h2 className='container__title__form'>Formulario de registro</h2>
          <div className='title__form'><box-icon name='book-open' color='black' size='21px' />
            <p className='text__title__form'>Virtual Schedule</p>
          </div>
          <div className='list__buttons__form'>
            <div className='list__buttons__div__register'>
              <input className='inputs__form' placeholder='Nombre' type='text' />
              <input className='inputs__form' placeholder='Apellido' type='text' />
            </div>
            <div className='list__buttons__div2'>
              <input className='inputs__form' placeholder='Correo' type='text' />
              <input className='inputs__form' placeholder='Contraseña' type='password' />
            </div>
          </div>
          <button className='RegisterButton'>Registrarme</button>
          <Link className='SigninButtonRedirect' to='/sign-in'>¿Ya tienes una cuenta?</Link>
        </div>
      </div>
    </>
  )
}
