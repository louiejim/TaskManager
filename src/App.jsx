import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./login/pages/LoginPage";
import RegisterPage from "./login/pages/RegisterPage";
import * as authService from "./Services/auth";
import { useState } from "react";
import TaskComponents from "./task/components/TaskComponents";

function App() {
  const [accessToken, setAccessToken] = useState(authService.getAccessToken());
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      const response = await authService.login(username, password);
      localStorage.setItem("accessToken", response.data.accessToken);
      setAccessToken(response.data.accessToken);
      navigate("task");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"login"}></Navigate>} />
      <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="register" element={<RegisterPage></RegisterPage>} />
      <Route path="task" element={<TaskComponents />} />
    </Routes>
  );
}

export default App;
