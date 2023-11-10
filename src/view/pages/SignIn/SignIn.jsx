import { Link, useNavigate } from 'react-router-dom'
import './signin.css'
import { LogoForForm } from '../../components/icons/icons'
import { useContext } from 'react'
import { TaskContext } from '../../../context/tasks'

export const SignIn = () => {
  const { dispatch } = useContext(TaskContext)
  const navigate = useNavigate()
  const handleSubmitSignin = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(response => {
        window.alert('Bienvenido ' + response.user.firstName)
        dispatch({ type: 'LOGIN', payload: response.user })
        navigate('/createtask')
      })
  }
  return (
    <>
      <div className='signin'>
        <form onSubmit={handleSubmitSignin}>
          <div className='container__form'>
            <h2 className='container__title__form'>Iniciar sesión</h2>
            <div className='title__form__signin'><LogoForForm />
              <p className='text__title__form__signin'>Virtual Schedule</p>
            </div>
            <div className='list__buttons__form'>
              <div className='list__buttons__div2'>
                <input name='email' id='email' className='inputs__form' placeholder='Correo' type='text' />
                <input name='password' id='password' className='inputs__form' placeholder='Contraseña' type='password' />
              </div>
            </div>
            <button type='submit' className='SigninButton'>Iniciar Sesión</button>
            <Link className='RegisrerButtonRedirect' to='/register'>¿Aún no tienes una cuenta?</Link>
          </div>
        </form>
      </div>
    </>
  )
}
