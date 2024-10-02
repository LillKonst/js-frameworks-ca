
import Layout from "./components/Layout";
import { RouteNotFound } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
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