import './Carrusel.css'

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
            <div className='img img1' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Crea Tu usuario!</h1>
              <p>Ingresa tus datos personales</p>
            </div>
            <div className='img img2' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Inicia sesión!</h1>
              <p>Coloca el correo y contraseña previamente creados</p>
            </div>
            <div className='img img3' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Ya puedes empezar tu vida ordenada!</h1>
              <p>Crea tu primer tarea con Virtual Schedule</p>
            </div>
            <div className='img img4' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¿Tareas pendientes?</h1>
              <p>Dale al boton verde cuando ya hayas completado tus tareas</p>
            </div>
            <div className='img img5' />
          </li>
          <li>
            <div className='carrusel__text'>
              <h1>¡Felicidades!</h1>
              <p>Has completado todos los pasos disfruta de VS las veces que quieras :D</p>
            </div>
            <div className='img img6' />
          </li>
        </ul>
      </div>
    </div>
  )
}
