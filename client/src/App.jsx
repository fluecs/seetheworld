import './App.css'
import TopNav from "./header/TopNav";

import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Locations from "./location/Locations";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/locations" element={ <Locations />} />
        <Route path="/view" element={ <h1>Test</h1>} />
      </Routes>
    </>
  )
}