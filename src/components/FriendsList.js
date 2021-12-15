import React,{useState,useEffect} from 'react';
import axios from 'axios';


const FriendsList = (props) => {
    const [data,setData] = useState([])
    
    useEffect(()=> {
        axios.get("http://localhost:9000/api/friends",{
            headers:{authorization:localStorage.getItem("token")},
        })
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>console.log({err}))
    },[])
   
    return(
        <div>
            <h1>FriendsList</h1>
            {
                data.map(friend => {
                   
                   return <h3 key={friend.id}>-{friend.name} -{friend.email}</h3>
                })
            }
        </div>
    )
}
export default FriendsList;