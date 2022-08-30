import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Login from './components/login/login'
import Logout from './components/logout/logout'
import { selectUser } from './features/user-slice'

function App () {
  const user = useSelector(selectUser)
  return (
    <div >
      { user.user ? <Logout/> : <Login/>}
    </div>
  )
}

export default App
