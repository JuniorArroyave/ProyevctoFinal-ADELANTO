import './Carrusel.css'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'

export const Carrusel = () => {
  return (
    <div className='background__carrusel'>
      <div className='container-carrusel'>
        <ul>
          <li>
            <div className='carrusel__text'>
              <h1>¡Asi de facil es usar VirtualSchedule!</h1>
              <p>Dirigete al apartado de registarme</p>
            </div>
            <img src={img1} alt='' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Crea Tu usuario!</h1>
              <p>Ingresa tus datos personales</p>
            </div>
            <img src={img2} alt='' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Inicia sesión!</h1>
              <p>Coloca el correo y contraseña previamente creados</p>
            </div>
            <img src={img3} alt='' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Ya puedes empezar tu vida ordenada!</h1>
              <p>Crea tu primer tarea con Virtual Schedule</p>
            </div>
            <img src={img4} alt='' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¿Tareas pendientes?</h1>
              <p>Dale al boton verde cuando ya hayas completado tus tareas</p>
            </div>
            <img src={img5} alt='' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Felicidades!</h1>
              <p>Has completado todos los pasos disfruta de VS las veces que quieras :D</p>
            </div>
            <img src={img6} alt='' />
          </li>
        </ul>
      </div>
    </div>
  )
}
