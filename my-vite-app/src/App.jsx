
import Layout from "./components/Layout";
import { RouteNotFound } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  return (
    <div className="w-full">
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Product/:id" element={<Product />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
          </Routes>
    </div>
  )
}

export default App;