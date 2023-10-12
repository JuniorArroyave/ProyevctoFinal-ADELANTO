import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout.jsx'
import { Home } from '../pages/home.jsx'
import { Services } from '../pages/services.jsx'
import { SignIn } from '../pages/SignIn.jsx'
import { Register } from '../pages/register.jsx'

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
        path: 'services',
        Component: Services
      },
      {
        path: 'sign-in',
        Component: SignIn
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
])
