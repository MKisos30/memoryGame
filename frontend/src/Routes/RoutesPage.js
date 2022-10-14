import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import GamePage from "./GamePage";
import Login from "./Login";

const RoutesPage = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="game" element={<GamePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage