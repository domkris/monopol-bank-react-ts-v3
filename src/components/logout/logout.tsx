import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/user-slice'
import './logout.css'

function Logout () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const handleLogout = (e : React.FormEvent) => {
    e.preventDefault()
    dispatch(logout())
  }
  return (
        <div className='logout'>
            <h1>Welcome {user.user.email}</h1>
            <button onClick={ (e) => handleLogout(e)}>Logout</button>
        </div>
  )
}

export default Logout
