import React,{useState} from 'react';
import axios from 'axios';

const Login = (props) => {
    const [credentials,setCredentials] = useState({username:'',password:''});

    const handleChange = (e) => {
        setCredentials({
                    ...credentials,
                [e.target.name]:e.target.value
        })
        
       
    }
    const login = (e) => {
        e.preventDefault();
      
       axios.post('http://localhost:9000/api/login',credentials)
       .then(res=> 
        {
            localStorage.setItem("token", res.data.token);
            props.history.push('/friends') ;    
        })
       .catch(err=> console.log(err))
       
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>

            <label>Username</label>
            <input 
                type="text" 
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <br/>

            <label>Password</label>
            <input 
                type="password"
                name="password"
                value={credentials.password} 
                onChange={handleChange}
            />
            <br/>

            <button>Submit</button>
            </form>
        </div>
    )
}
export default Login;