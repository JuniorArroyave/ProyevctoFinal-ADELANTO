import { useContext } from 'react'
import { TaskContext } from '../../context/tasks'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { state } = useContext(TaskContext)
  if (!state.user) return <Navigate to='/sign-in' replace />
  return children
}
