import { Link } from 'react-router-dom'
import './register.css'

export const Register = () => {
  const handleSubmitRegister = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(response => {
        window.alert('el usuario ' + response.user.firstName + ' se creó correctamernte')
      })
  }
  return (
    <>
      <div className='register'>
        <form onSubmit={handleSubmitRegister}>
          <div className='container__form'>
            <h2 className='container__title__form'>Formulario de registro</h2>
            <div className='title__form'>
              <p className='text__title__form'>Virtual Schedule</p>
            </div>
            <div className='list__buttons__form'>
              <div className='list__buttons__div__register'>
                <input name='firstName' required id='firstName' className='inputs__form' placeholder='Nombre' type='text' />
                <input name='lastName' required id='lastName' className='inputs__form' placeholder='Apellido' type='text' />
              </div>
              <div className='list__buttons__div2'>
                <input name='email' required id='email' className='inputs__form' placeholder='Correo' type='text' />
                <input name='password' required id='password' className='inputs__form' placeholder='Contraseña' type='password' />
              </div>
            </div>
            <button type='submit' className='RegisterButton'>Registrarme</button>
            <Link className='SigninButtonRedirect' to='/sign-in'>¿Ya tienes una cuenta?</Link>
          </div>
        </form>
      </div>
    </>
  )
}
