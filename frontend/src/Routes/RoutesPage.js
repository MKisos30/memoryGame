import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import GamePage from "./GamePage";
import Login from "./Login";

const RoutesPage = () => {
  const [nameUser, setNameUser] = useState('')
  console.log(nameUser)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setNameUser={setNameUser} />} />
            <Route path="game" element={<GamePage nameUser={nameUser} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage