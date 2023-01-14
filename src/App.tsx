import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pb } from './store/pocketbase'

function App(props: { children?: React.ReactElement[] }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (pb.authStore.isValid == false) {
      navigate('/')
    }
  }, [])

  return <>{props.children}</>
}

export default App
