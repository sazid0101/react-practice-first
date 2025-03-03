import User from './user';
import './user.css'
import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(data => setUsers(data))
        
    },[])
    return(
        <div className='box'>
            <h2>users:{users.length} </h2>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}