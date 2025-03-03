import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div>
            <h3>users:{users.length} </h3>
        </div>
    )
}