import Cart from "../components/Cart/Cart"
import OrderDetails from "../components/OrderDetails/OrderDetails"
import { useCart } from "../context/CartContext";

export default function Checkout() {
    const { cart } = useCart();

    const subtotal = cart.reduce((total, item) => {
        const effectivePrice = item.discountedPrice ? item.discountedPrice : item.price;
        return total + effectivePrice * item.quantity;
    }, 0);
    return (
       <>
       <div className="h-16"></div>
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-16 m-3 md:mx-10 my-3">
       <Cart subtotal={subtotal}/>
       {cart.length > 0 && <OrderDetails subtotal={subtotal} />}
       </div>
       </>
    )
}