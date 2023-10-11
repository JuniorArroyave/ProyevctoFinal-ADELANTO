import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Header/Layout.jsx'
import { Home } from '../pages/home.jsx'
import { Services } from '../pages/services.jsx'
import { SignIn } from '../pages/SignIn.jsx'

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
      }
    ]
  }
])
