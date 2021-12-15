import React,{useState} from 'react';
import axios from 'axios'

const AddFriend = (props) => {
    const [values,setValues] = useState({name:'',email:''});

    const handleChange = (e) => {
        setValues({  
            ...values,
            [e.target.name]:e.target.value
        })
    }
    const submitFriend = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9000/api/friends',values,{
            headers:{authorization:localStorage.getItem("token")},
        })
        .then(res => console.log(res))
        .catch(err => console.log({err}))
    }
    return(
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={submitFriend}>
                <label>Friend Name</label>
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange} 
                />
                <br/>

                <label>Friend Email</label>
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange} 
                />
                <br/>

                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddFriend;