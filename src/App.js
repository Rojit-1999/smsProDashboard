import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Component/Dashboard/Dashboard";
import Home from "./Component/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Home>
        <Routes>
        <Route index element={<Dashboard />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Home>
    </BrowserRouter>
  );
}

export default App;
