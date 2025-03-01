export default function Todo({task,isDone}){
    if(isDone){
        return <li>my task : {task}</li>
    }else{
        return <li>work on : {task}</li>
    }
}