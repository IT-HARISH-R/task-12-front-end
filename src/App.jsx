import { BrowserRouter, Route, Routes } from "react-router-dom"
import Singup from "./compon/Singup"
import Login from "./compon/Login"
import ResetPassword from "./compon/ResetPassword"
import Home from "./compon/Home"
import FirstCom from "./compon/FirstCom"
import ForgotPassword from "./compon/ForgotPassword"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstCom />} />
      <Route path="/home" element={<Home />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>

}

export default App