import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./login/pages/LoginPage";
import RegisterPage from "./login/pages/RegisterPage";
import * as authService from "./Services/auth";
import { useState } from "react";
import TaskComponents from "./task/components/TaskComponents";
import { CssBaseline } from "@mui/material";
import NavBar from "./task/components/NavBar";
import NotFound from "./task/pages/NotFound";

function App() {
  const currentUser = authService.getCurrentUser();

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
  const handleLogout = async () => {
    authService.logout();
    setAccessToken(null);
    navigate("/login");
  };

  return (
    <CssBaseline>
      <NavBar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to={"login"} />} />
        <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="task"
          element={accessToken ? <TaskComponents /> : <NotFound />}
        />
      </Routes>
    </CssBaseline>
  );
}

export default App;
