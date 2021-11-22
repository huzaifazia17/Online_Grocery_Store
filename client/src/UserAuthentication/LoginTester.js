import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import './SignUp.css'

const LoginTester = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = () => {
        const data = { username: username, password: password }
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({username: response.data.username, id: response.data.id, status:  true});
                navigate("/");
            }
        })
    };
    return (

        <div className="login">
            Username: <input type="text"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
                />
            Password: <input type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <button onClick={login}> Login </button>
        </div>
    )
}

export default LoginTester
