import Login from "./components/Login";
import ToDo from "./components/ToDo";
import { Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/login.html" element={<Login />} />
      <Route path="/" element={<ToDo />} />
    </Routes>
  );
};

export default AppRoute;
