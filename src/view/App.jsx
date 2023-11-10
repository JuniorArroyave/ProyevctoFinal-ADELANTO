import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { TaskProvider } from '../context/tasks'

export const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  )
}
