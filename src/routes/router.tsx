import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'

import Login from './Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])
