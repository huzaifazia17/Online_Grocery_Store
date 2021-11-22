import { useState } from 'react'
import './SignUp.css'

const SignUp = ({onAdd}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!username) {
      alert('Please add a task')
      return
    }

  onAdd({ username, password, email })

    setUsername('')
    setPassword('')
    setEmail('')
  }

  return (
    <div className='signUp-form'>

    <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type='text'
          placeholder='Add Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
        <label>Password </label>
        <input
          type='password'
          placeholder='Add Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <label>Email</label>
        <input
          type='email'
          placeholder='Add Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

      <input type='submit' value='Sign Up'/>
    </form>
    </div>
  )
}

export default SignUp