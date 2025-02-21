import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Admin from "./admin/Admin";
import Dashboard from "./user/Dashboard";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);