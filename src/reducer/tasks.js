export const initialState = {
  user: null,
  tasks: [],
  taskToUpdate: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'LOAD_TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD_TASKS':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK':
      return { ...state, taskToUpdate: action.payload }
    case 'DELETE_TASK':
      return { ...state, tasks: state.task.filter(tasks => tasks._id !== action.payload) }
    default:
      return state
  }
}
