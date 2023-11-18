import { Carrusel } from '../../components/Carrusel/Carrusel.jsx'
import './home.css'

export const Home = () => {
  return (
    <>

      <div className='home'>
        <div className='container__home'>
          <h1 className='home__title'>¡Vive a tu ritmo!</h1>
          <p className='home__description'>Descubre una nueva era en la gestión de tareas con VirtualSchedule. Regístrate y sumérgete en un entorno donde tus tareas se sincronizan con el ritmo natural de tu día. Desde la primera tarea hasta el último logro, VirtualSchedule te acompaña en cada paso, transformando tu jornada en una experiencia armoniosa.</p>
        </div>

        <div className='carrusel'>
          <Carrusel />
        </div>
      </div>

    </>
  )
}
