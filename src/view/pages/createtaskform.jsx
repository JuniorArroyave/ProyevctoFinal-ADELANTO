import './assets/css/createtaskform.css'

export const CreateTask = () => {
  return (
    <>
      <div className='container__task__form'>
        <div className='container__form'>
          <h2 className='container__title__form'>!Somos tú agenda virtual¡</h2>
          <div className='title__form'><box-icon name='book-open' color='black' size='21px' />
            <p className='text__title__form'>Virtual Schedule</p>
          </div>
          <div className='list__buttons__form'>
            <div className='list__buttons__div'>
              <input className='inputs__form' type='text' placeholder='Dale un nombre a tu tarea' />
              <input className='description inputs__form' placeholder='Agraga una descripción' type='text' />
              <label className='label__fecha__finalizacion' htmlFor='Fechafinalizacion'>Fecha de finalizacion
                <input id='Fechafinalizacion' className='inputs__form date' type='date' />
              </label>
            </div>
            <h3 className='status__title'>Estado</h3>
            <div className='status__container'>
              <p className='status__check'><input className='check__task' placeholder='Estado' type='checkbox' /> Pendiente</p>
              <p className='status__check'><input className='check__task' placeholder='Estado' type='checkbox' /> Finalizada</p>
            </div>
          </div>
          <button className='RegisterButtonTask'>Registrar Tarea</button>
        </div>
      </div>
    </>
  )
}
