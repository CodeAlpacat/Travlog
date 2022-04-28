import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
// import Detail from "./routes/Detail";
import React from 'react';
import Login from './routes/Login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

