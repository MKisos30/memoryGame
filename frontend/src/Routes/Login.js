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
    <div>
      <form onSubmit={handleGetUserName}>
        <input name="userName" type="text" placeholder="Enter your name" />
        <button type="submit" >Start</button>
      </form>
    </div>
  )
}

export default Login