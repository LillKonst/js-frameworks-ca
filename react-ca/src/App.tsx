import React from "react";
import Layout from "./components/Layout";
import { RouteNotFound } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<p>Home</p>} />
            <Route path="Contact" element={<p>Contact</p>} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
          </Routes>
    </div>
  )
}

export default App;

