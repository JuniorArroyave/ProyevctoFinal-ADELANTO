import './createtaskform.css'
import { LogoForForm } from '../../components/icons/icons'

export const CreateTask = () => {
  const handleSubmitTask = (event) => {
    event.preventDefault()
    const id = globalThis.localStorage.getItem('userId')
    let body = { isCompleted: true, userId: id }
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }

    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(body)

    }).then(response => response.json())
      .then(response => {
        window.alert('Se creó correctamente la tarea ' + response.todo.name)
      })
  }
  return (
    <>
      <div className='container__task__form'>
        <form onSubmit={handleSubmitTask}>
          <div className='container__form'>
            <h2 className='container__title__form'>!Somos tú agenda virtual¡</h2>
            <div className='title__form'><LogoForForm />
              <p className='text__title__form'>Virtual Schedule</p>
            </div>
            <div className='list__buttons__form'>
              <div className='list__buttons__div'>
                <input id='name' name='name' className='inputs__form' type='text' placeholder='Dale un nombre a tu tarea' required />
                <textarea id='description' name='description' className='description inputs__form' rows='10' placeholder='Agrega una descripción para tu tarea' required />
                <label className='label__fecha__finalizacion' htmlFor='finishDate'>Fecha de finalizacion
                  <input id='finishDate' name='finishDate' className='inputs__form date' type='date' required />
                </label>
              </div>
            </div>
            <button type='submit' className='RegisterButtonTask'>Registrar Tarea</button>
          </div>
        </form>
      </div>
    </>
  )
}
