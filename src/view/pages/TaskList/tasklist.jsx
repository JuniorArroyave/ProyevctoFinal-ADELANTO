import './tasklist.css'
import { DeleteTask, EditTask, Taskcomplete, Taskpending } from '../../components/icons/icons'
import { useContext, useEffect } from 'react'
import { TaskContext } from '../../../context/tasks'
import { initialState } from '../../../reducer/tasks'

export const Tasks = () => {
  const { state, dispatch } = useContext(TaskContext, initialState)

  useEffect(() => {
    fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${state.user._id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'LOAD_TASKS', payload: response.todos })
      })
  }, [])

  const handleDelete = () => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo/' + state.tasks._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => response.json())
      .then(response => {
        window.alert('Se eliminó correctamente la tarea ' + response.todo.name)
        dispatch({ type: 'DELETE_TASK', payload: response.todo })
      })
  }

  return (
    <>
      <div className='task'>
        <table className='table__container'>
          <thead className='table__head'>
            <tr className='titles__head'>
              <td colSpan='3'> Lista de Tareas </td>
              <td colSpan='2' className='border__optios'>Opciones</td>
              <td colSpan='2' className='border__check'> Marcar como </td>
            </tr>

            <tr className='titles__options'>
              <td>Nombre</td>
              <td>Descripcion</td>
              <td>Finaliza</td>
              <td>editar</td>
              <td>Eliminar</td>
              <td>Pendiente</td>
              <td>Completada</td>
            </tr>
          </thead>
          <tbody>
            {state.tasks.map((task) => (
              <tr className='table__content' key={task._id}>
                <td><p>{task.name}</p></td>
                <td><p>{task.description}</p></td>
                <td><p>{task.finishDate}</p></td>
                <td><button onClick={() => dispatch({ type: 'UPDATE_TASK', payload: task })}><EditTask /></button></td>
                <td><button onClick={handleDelete}><DeleteTask /></button></td>
                <td><button><Taskpending /></button></td>
                <td><button><Taskcomplete /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
