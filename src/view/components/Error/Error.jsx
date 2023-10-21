import { Link } from 'react-router-dom'
import './Error.css'

export const Error = ({ errorText, statusError }) => {
  return (
    <section className='error'>
      <h1>Ooops!</h1>
      <h2>ha ocurrido un error</h2>
      <p>{errorText} {errorText && '|'} {statusError}</p>
      <Link to='/'>Volver al Inicio</Link>
    </section>
  )
}
