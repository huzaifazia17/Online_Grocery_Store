import { useState } from 'react'

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
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Username</label>
        <input
          type='text'
          placeholder='Add Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input
          type='text'
          placeholder='Add Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Email</label>
        <input
          type='text'
          placeholder='Add Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <input type='submit' value='Sign-Up' className='btn btn-block'
         />
    </form>
  )

}

export default SignUp