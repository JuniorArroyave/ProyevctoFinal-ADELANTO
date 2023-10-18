import './assets/css/home.css'

export const Home = () => {
  return (
    <>

      <div className='container'>
        <div className='content'>
          <h1 className='content__title'>!Aqui va un titulo¡</h1>
          <p className='content__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptas natus neque laudantium dignissimos quidem quis quaerat quisquam quo enim temporibus iure cupiditate eaque eos, excepturi, possimus repellendus odio numquam.</p>
        </div>

        <div className='carrusel'>
          <div className='background__carrusel'>
            <div className='container-carrusel'>
              <ul>
                <li>
                  <div className='carrusel__text'>
                    <h1>¡Asi de facil es usar VirtualSchedule!</h1>
                    <p>Dirigete al apartado de registarme</p>
                  </div>
                  <img src='./src/view/pages/assets/img/1.png' alt='' />
                </li>
                <li>
                  <div className='carrusel__text'>
                    <h1>¡Crea Tu usuario!</h1>
                    <p>Ingresa tus datos personales</p>
                  </div>
                  <img src='./src/view/pages/assets/img/2.png' alt='' />
                </li>
                <li>
                  <div className='carrusel__text'>
                    <h1>¡Inicia sesión!</h1>
                    <p>Coloca el correo y contraseña previamente creados</p>
                  </div>
                  <img src='./src/view/pages/assets/img/3.png' alt='' />
                </li>
                <li>
                  <div className='carrusel__text'>
                    <h1>¡Ya puedes empezar tu vida ordenada!</h1>
                    <p>Crea tu primer tarea con Virtual Schedule</p>
                  </div>
                  <img src='./src/view/pages/assets/img/4.png' alt='' />
                </li>
                <li>
                  <div className='carrusel__text'>
                    <h1>¿Tareas pendientes?</h1>
                    <p>Dale al boton verde cuando ya hayas completado tus tareas</p>
                  </div>
                  <img src='./src/view/pages/assets/img/5.png' alt='' />
                </li>
                <li>
                  <div className='carrusel__text'>
                    <h1>¡Felicidades!</h1>
                    <p>Has completado todos los pasos disfruta de VS las veces que quieras :D</p>
                  </div>
                  <img src='./src/view/pages/assets/img/6.png' alt='' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
