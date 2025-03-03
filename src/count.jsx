import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(5)

    //button click & add 1++++
    const handleAdd = () =>{
       const newCount= count + 1;
       setCount(newCount)
    }
    //button click & reduce 1---
    const handleReduce = () =>{
        const newCount = count -1;
        setCount(newCount)
    }
    return(
        <div style={{border:"2px solid blue"}}>
            <h3>counter :{count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}