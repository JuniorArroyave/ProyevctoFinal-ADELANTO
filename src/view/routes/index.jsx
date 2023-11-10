import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout.jsx'
import { Home } from '../pages/Home/home.jsx'
import { Tasks } from '../pages/TaskList/tasklist.jsx'
import { SignIn } from '../pages/SignIn/SignIn.jsx'
import { Register } from '../pages/Register/register.jsx'
import { CreateTask } from '../pages/Createtask/createtaskform.jsx'
import { ErrorPage } from '../pages/Errorpage.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'tasks',
        Component: Tasks
      },
      {
        path: 'sign-in',
        Component: SignIn
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'createtask',
        element: (
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        )

      }
    ],
    ErrorBoundary: ErrorPage
  }
])
