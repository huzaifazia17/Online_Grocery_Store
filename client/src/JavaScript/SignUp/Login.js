import { useState} from 'react'
//import SignUp from './SignUp.js'
//import LoginForm from './LoginForm.js'

const Login = ({userName, userEmail, Logout, loginInfo, error}) => {

    // const adminUser = {
    //     email: "admin@admin.com",
    //     password:"admin123"
    // }

    // const [user, setUser] = useState([{ name: "", email: "" }]);
    // const [error, setError] = useState("");

    // const loginInfo = details => {
    //    // console.log(details);

    //     if (details.email === adminUser.email &&
    //         details.password === adminUser.password)
    //     {
    //         console.log("Logged in");

    //         setUser([{
    //             name: details.name,
    //             email: details.email
    //         }]);
    //     }
    //     else {
    //         //console.log();
    //         setError('Details do not match')
    //     }
    // }

    // const Logout = () => {
    //     console.log("Logout");

    //     setUser([{ name: "", email: "" }]);
    // }
    return (
        <div className="App">
            {(userEmail !== "") ? (
                <div className="Welcome">
                    <h2> Welcome, <span> {userName} </span></h2>
                    <button onClick = {Logout}>Logout</button>
                </div>
            ) : (
                    <LoginForm loginInfo={loginInfo} error={error}/> 
            )}
           
         </div>

        //<div> Helo</div>
    )

}



export default Login
