import './assets/css/services.css'

export const Services = () => {
  return (
    <>
      <div className='container__services'>
        <div className='container__table'>
          <div className='task__complete'>
            <h1 className='task__complete__title'><box-icon name='message-square-check' size='md' color='green' />Tareas completadas</h1>
            <div className='buttons__task__complete'>
              <input type='text' />
              <input type='text' />
              <input type='text' />
              <input type='text' />
            </div>
          </div>
          <div className='task__pending'>
            <h1 className='task__pending__title'><box-icon name='message-square-x' size='md' color='red' /> Tareas Pendientes</h1>
            <div className='buttons__task__pending'>
              <input type='text' />
              <input type='text' />
              <input type='text' />
              <input type='text' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
