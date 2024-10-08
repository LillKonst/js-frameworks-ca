
import Layout from "./components/Layout/Layout";
import { RouteNotFound } from "./components/Layout/Header/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Product from "./routes/Product";
import Checkout from "./routes/Checkout";
import CheckoutSuccess from "./routes/CheckoutSuccess";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="w-full">
       <CartProvider>
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="CartIcon" element={<Checkout />} />
            <Route path="Product/:id" element={<Product />} />
            <Route path="*" element={<RouteNotFound />} />
            <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
          </Route>
          </Routes>
      </CartProvider>
    </div>
  )
}

export default App;