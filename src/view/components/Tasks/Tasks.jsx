import { Link } from 'react-router-dom'
import { Taskcomplete, Taskpending } from '../icons/icons'

export const TasksTable = ({ tasks }) => {
  return (
    <div className='task'>
      <div className='container__task'>
        <div className='complete__task__container'>
          <h1 className='complete__task__title'> <Taskcomplete /> Tareas completadas</h1>
          {tasks.map((task) => (
            <div className='task__complete' key={task._id}>
              <div className='task__nombre'>
                <p>{task.name}</p>
              </div>
              <div className='task__description'>
                <p>{task.description}</p>
              </div>
              <div className='task__date'>
                <p>{task.finishDate}</p>
              </div>
              <div className='task__options'>
                <p>Campo vacio</p>
              </div>
            </div>
          ))}
        </div>
        <div className='pending__task__container'>
          <h1 className='pending__task__title'><Taskpending /> Tareas Pendientes</h1>
          <div className='task__pending'>
            <div className='task__nombre'>
              <p>Campo vacio</p>
            </div>
            <div className='task__description'>
              <p itemID='aidi' id='aidi'>Campo vacio</p>
            </div>
            <div className='task__date'>
              <p>Campo vacio</p>
            </div>
            <div className='task__options'>
              <p>Campo vacio</p>
            </div>
          </div>
        </div>
      </div>
      <div className='aggTask'>
        <Link to='/createtask'>Agregar Tarea</Link>
      </div>
    </div>
  )
}
