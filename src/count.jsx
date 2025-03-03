import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)

    //button click & add 1++++
    const handleClick = () =>{
       const newCount= count + 1;
       setCount(newCount)
    }
    //button click & reduce 1---
    const handleClick2 = () =>{
        const newCount = count -1;
        setCount(newCount)
    }
    return(
        <div style={{border:"2px solid blue"}}>
            <h3>counter :{count} </h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClick2}>reduce</button>
        </div>
    )
}