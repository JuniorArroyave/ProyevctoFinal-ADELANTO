import './createtaskform.css'
import { LogoForForm } from '../../components/icons/icons'
import { Tasks } from '../TaskList/tasklist'
import { useContext } from 'react'
import { TaskContext } from '../../../context/tasks'
import { initialState } from '../../../reducer/tasks'

export function CreateTask () {
  const { state, dispatch } = useContext(TaskContext, initialState)
  const text = state.taskToUpdate ? 'Actualizar' : 'Crear'

  const handleSubmitTask = (event) => {
    event.preventDefault()
    let body = { isCompleted: false, userId: state.user._id }
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }

    const update = (body, event) => {
      fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({ ...body, _id: state.taskToUpdate._id })

      }).then(response => response.json())
        .then(response => {
          window.alert('Se actualizó correctamente la tarea ' + response.todo.name)
          event.target.reset()
          const index = state.tasks.findIndex(task => task._id === state.taskToUpdate._id)
          state.tasks[index] = response.todo
          dispatch({ type: 'UPDATE_TASK', payload: response.todo })
        })
    }

    const create = (body, event) => {
      fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(body, event)

      }).then(response => response.json())
        .then(response => {
          event.target.reset()
          window.alert('Se creó correctamente la tarea ' + response.todo.name)
          dispatch({ type: 'ADD_TASKS', payload: response.todo })
        })
    }
    state.taskToUpdate ? update(body, event) : create(body, event)
  }

  return (
    <>
      <div className='containerAll'>
        <div className='container__task__form'>
          <form onSubmit={handleSubmitTask}>
            <div className='container__form'>
              <h2 className='container__title__form'>!Somos tú agenda virtual¡</h2>
              <div className='title__form'><LogoForForm />
                <p className='text__title__form'>Virtual Schedule</p>
              </div>
              <div className='list__buttons__form'>
                <div className='list__buttons__div'>
                  <input id='name' name='name' className='inputs__form' type='text' placeholder='Dale un nombre a tu tarea' required defaultValue={state.taskToUpdate ? state.taskToUpdate.name : ''} />
                  <textarea id='description' name='description' className='description inputs__form' rows='10' placeholder='Agrega una descripción para tu tarea' required defaultValue={state.taskToUpdate ? state.taskToUpdate.description : ''} />
                  <label className='label__fecha__finalizacion' htmlFor='finishDate'>Fecha de finalizacion
                    <input asp-for='MyDate' asp-format='{0:yyyy-MM-dd}' id='finishDate' name='finishDate' className='inputs__form date' type='date' required defaultValue={state.taskToUpdate ? state.taskToUpdate.finishDate : ''} />
                  </label>
                </div>
              </div>
              <button type='submit' className='RegisterButtonTask'>{text} Tarea</button>
            </div>
          </form>
        </div>
        <Tasks />
      </div>
    </>
  )
}
