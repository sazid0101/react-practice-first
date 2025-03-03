// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Counter from './count'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick={()=>{alert("button 3 clicked")}}>click me3</button>
      <button onClick={()=> handleClick4(7)}>click me4</button>
      <MyName></MyName>
      <Developer></Developer>
      <Product name="laptop" price="50000"></Product>
      <Product name= 'mobile'price="5000"></Product>
      <Product name= "watch" price="500"></Product>
      <Student grade={3.5} marks={70}></Student>
      <Student grade='4'></Student>
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn react core concept" isDone={false}></Todo>
      <Todo task="practice jsx" isDone={true}></Todo>
    
    </>
  )
}
//func7
const handleClick4 = (num) =>{
  alert(num +1)
}
//function6
const handleClick2 = () =>{
  alert("button 2 clicked")
}
// function5
function handleClick(){
  alert("clicked")
}
//function 4
// const {grade,marks} = {grade : '3.5', marks : '70'} 
function Student({grade='2',marks='50'}){
  return(
    <div className='myName'>
      <h3>he is a CSE student, his GPA is : {grade}</h3>
      <h4>he got {marks}% marks</h4>
    </div>
  )
}
//function3

function Product(props){
  console.log(props)
  return(
    <div >
      <h3>this is my product: {props.name}, price : {props.price}</h3>
    </div>
  )
}
//function 2
function Developer(){
  const developerStyle = {  //css style
    border: '5px solid red',
    margin: '10px',
    padding: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h4>I am a professional developer</h4>
    </div>
  )
}
//function 1
function MyName(){
  const person = {
    name : "shahriar",
    age : 26
  }
  return ( //css style from app.css
    <div className='myName'>  
      <h3>my name is {person.name}, my age is {person.age}</h3>
    </div>
  )
}


export default App
