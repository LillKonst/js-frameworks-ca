import { useCart } from "../context/CartContext";
import CartCount from "./CartCount";
import { useNavigate } from "react-router-dom";

const CheckoutTest = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CartIcon'); // Redirect to the Checkout page
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between border-b border-t py-2">
                            <div className="flex w-full">
                                <div className="container w-24 h-36 mx-4">
                                    <img
                                        src={item.image.url}
                                        alt={item.image.alt || "Product image"}
                                        className="object-cover w-full h-full rounded"
                                    />
                                </div>
                                <div className="flex m-2 items-center">
                                    <h1 className="text-2xl font-bold m-2">{item.title}</h1>
                                    <div className="flex">
                                        {item.discountedPrice ? (
                                            <p className="text-xl px-3 text-red-500 m-2">{item.discountedPrice}</p>  
                                        ) : (
                                            <p className="text-xl font-semibold m-2">{item.price}</p>
                                        )}
                                    </div>
                                    {/* Pass the quantity and product ID to CartCount */}
                                    <CartCount productId={item.id} initialCount={item.quantity} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button className="button bg-customBlue m-5" onClick={handleClick}>Proceed to checkout</button>
        </div>
    );
};


export default CheckoutTest;
