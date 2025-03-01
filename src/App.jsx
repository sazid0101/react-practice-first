import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <MyName></MyName>
      <Developer></Developer>
      <Product name="laptop" price="50000"></Product>
      <Product name= 'mobile'price="5000"></Product>
      <Product name= "watch" price="500"></Product>
      <Student grade={3.5} marks={70}></Student>
      <Student grade='4'></Student>
    
    </>
  )
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
