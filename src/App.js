import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ToDo from "./components/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login.html" element={<Login />} />
        <Route path="/" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
