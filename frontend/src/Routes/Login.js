import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  function isEmpty(str) {
    return (!str || str.length === 0 );
}

  const handleGetUserName = (event) => {
    event.preventDefault()
  
    const userName = event.target.elements.userName.value

    console.log(isEmpty(userName))
     if(isEmpty(userName)) {
       alert("name can't be empty")
     } else {
       const name = localStorage.getItem("name")
       if (!name) {
         localStorage.setItem("name", userName)
       }
       navigate('/game') // -> create the arr of cards -> map it
     }
  }
  
  return (
    <div className="loginPage">
      <h1 className="titleLogin" >Welcome to memory game. The best game in the world!</h1>
      <form className="formLogin" onSubmit={handleGetUserName}>
        <input className="nameInput" name="userName" type="text" placeholder="Enter your name" />
        <button type="submit" >Start</button>
      </form>
    </div>
  )
}

export default Login