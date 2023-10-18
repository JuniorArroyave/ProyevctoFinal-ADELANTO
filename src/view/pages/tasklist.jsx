import { Link } from 'react-router-dom'
import './assets/css/tasklist.css'

export const Tasks = () => {
  return (
    <>
      <div className='container__task'>
        <div className='container__table'>
          <div className='task__complete'>
            <h1 className='task__complete__title'><box-icon name='message-square-check' size='md' color='green' />Tareas completadas</h1>
            <div className='buttons__task__pending'>
              <div className='task__container'>
                <h3>Sacar la basura</h3>
                <p>Que no se me olvide sacar la basura</p>
                <span>30/10/2023</span>
                <box-icon name='trash' color='red' />
              </div>
            </div>
          </div>
          <div className='task__pending'>
            <h1 className='task__pending__title'><box-icon name='message-square-x' size='md' color='red' /> Tareas Pendientes</h1>
            <div className='buttons__task__pending'>
              <h1>no hay tareas pendientes</h1>
            </div>
          </div>
        </div>
        <div className='aggTask'>
          <Link>Agregar Tarea</Link>
        </div>
      </div>
    </>
  )
}
