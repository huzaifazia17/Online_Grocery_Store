import { useState, useEffect } from 'react'
import SignUp from './SignUp.js'
//import Header from './Header.js'

import './SignUp.css'
//import '../JavaScript/Styles/Contact.css'

const SignUpForm = () => {
  const [users, setUsers] = useState([])
  //const [users, setUsers] = useState([{ name: "", email: "" }]);



  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

  //Fetch users
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:7000/users')
    const data = await res.json()

    return data
  }

  //Fetch user
  // const fetchUser = async (id) => {
  //   const res = await fetch(`http://localhost:7000/users/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Add User
  const addUser = async (user) => {
    const res = await fetch('http://localhost:7000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    setUsers([...users, data])
  }
  return (
    <div className='container'>
      
      <h1 className="signUp"><i class="fas fa-paper-plane"></i>Sign Up</h1>

      <SignUp onAdd={addUser} />

    </div>
  )
}

export default SignUpForm
