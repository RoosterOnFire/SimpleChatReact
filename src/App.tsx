import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pb } from './store/pocketbase'

function App(props: PropsWithChildren) {
  const navigate = useNavigate()

  useEffect(() => {
    if (pb.authStore.isValid == false) {
      navigate('/')
    }
  }, [])

  return <>{props.children}</>
}

export default App
