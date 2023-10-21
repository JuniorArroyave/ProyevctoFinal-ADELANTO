import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout.jsx'
import { Home } from '../pages/home.jsx'
import { Tasks } from '../pages/tasklist.jsx'
import { SignIn } from '../pages/SignIn.jsx'
import { Register } from '../pages/register.jsx'
import { CreateTask } from '../pages/createtaskform.jsx'
import { ErrorPage } from '../pages/Errorpage.jsx'

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
        Component: CreateTask
      }
    ],
    ErrorBoundary: ErrorPage
  }
])
