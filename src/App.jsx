import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Task from "./TaskPages/pages/Task";
import LoginPage from "./login/pages/LoginPage";
import RegisterPage from "./login/pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"login"}></Navigate>} />
      <Route path="login" element={<LoginPage></LoginPage>} />
      <Route path="register" element={<RegisterPage></RegisterPage>} />
      <Route path="task" element={<Task></Task>} />
    </Routes>
  );
}

export default App;
