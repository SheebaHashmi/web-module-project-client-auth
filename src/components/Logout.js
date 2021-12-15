import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout =(props) => {
    const {push} = useHistory()
    useEffect(()=> {
        axios.post("http://localhost:9000/api/logout",null,{
            headers:{authorization:localStorage.getItem("token")},
        })
        .then(res=>{
            localStorage.removeItem('token');
            push('/login')
        })
    },[])

    return(<div></div>)
}
export default Logout;