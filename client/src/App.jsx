import './App.css'
import TopNav from "./header/TopNav";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Locations from "./location/Locations";
import ActivitiesPage from "./pages/ActivitiesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/locations" element={ <Locations />} />
        <Route path="/activities" element={ <ActivitiesPage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/register" element={ <RegisterPage />} />
        <Route path="/view" element={ <h1>Test</h1>} />
      </Routes>
    </AuthProvider>
  )
}