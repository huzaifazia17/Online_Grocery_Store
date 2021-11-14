import User from './User'

const Users = ({users}) => {
    return (
        <>
          {users.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </>
      )
}

export default Users
