import { useNavigate } from 'react-router-dom'
import App from '../App'
import { pb } from '../store/pocketbase'

const Dashboard = () => {
  const navigate = useNavigate()

  function logout() {
    pb.authStore.clear()
    navigate('/')
  }

  return (
    <App>
      <p>dashboard</p>
      <button onClick={logout} type="button">
        LogOut
      </button>
    </App>
  )
}

export default Dashboard
