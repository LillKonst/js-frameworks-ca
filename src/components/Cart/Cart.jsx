import { useCart } from "../../context/CartContext";
import ProductCart from "../cards/ProductCart/ProductCart";

export default function Cart({subtotal}) {
    const { cart } = useCart();

    // const subtotal = cart.reduce((total, item) => {
    //     const effectivePrice = item.discountedPrice ? item.discountedPrice : item.price;
    //     return total + effectivePrice * item.quantity;
    // }, 0);

    return (
        <div className="md:p-2">
            <h1 className="text-2xl font-semibold">Your Cart</h1>
            <div>
            {cart.length > 0 ? (
                cart.map(item => (
                    <ProductCart key={item.id} item={item} />
                ))
            ) : (
                <p>Your cart is empty.</p>
                )}
            </div>

            {/* <div className="mt-4 text-xl font-bold">
                Subtotal: ${subtotal.toFixed(2)} 
            </div> */}
           
        </div>
    );

}
