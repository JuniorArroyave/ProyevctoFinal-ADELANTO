import './createtaskform.css'

export const CreateTask = () => {
  const handleSubmitTask = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      console.log(element.value)
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(response => {
        window.alert('Se creó correctamente la tarea' + response.name)
      })
  }
  return (
    <>
      <div className='container__task__form'>
        <form onSubmit={handleSubmitTask}>
          <div className='container__form'>
            <h2 className='container__title__form'>!Somos tú agenda virtual¡</h2>
            <div className='title__form'><box-icon name='book-open' color='black' size='21px' />
              <p className='text__title__form'>Virtual Schedule</p>
            </div>
            <div className='list__buttons__form'>
              <div className='list__buttons__div'>
                <input required name='nametask' id='nametask' className='inputs__form' type='text' placeholder='Dale un nombre a tu tarea' />
                <textarea required name='descriptiontask' className='description inputs__form' id='descriptiontask' rows='10' placeholder='Agrega una descripción para tu tarea' />
                <label className='label__fecha__finalizacion' htmlFor='datetask'>Fecha de finalizacion
                  <input required name='datetask' id='datetask' className='inputs__form date' type='date' />
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
