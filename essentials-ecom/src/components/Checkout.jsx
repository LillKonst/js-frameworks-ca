import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutTest = () => {
    const { cart, incrementQuantity, decrementQuantity } = useCart();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/CheckoutSuccess");
    };

    const subtotal = cart.reduce((total, item) => {
        const effectivePrice = item.discountedPrice ? item.discountedPrice : item.price;
        return total + effectivePrice * item.quantity;
    }, 0);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                      {cart.map(item => {
                        // Calculate the effective price based on discounted price
                        const effectivePrice = item.discountedPrice ? item.discountedPrice : item.price;
                        // Calculate the total price for this item
                        const totalPrice = effectivePrice * item.quantity;

                        return (
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
                                        <div className="flex items-center m-2">
                                            <button
                                                onClick={() => incrementQuantity(item.id)}
                                                className="border-black bg-white rounded px-2"
                                            >
                                                +
                                            </button>
                                            <span className="mx-2 text-lg">{item.quantity}</span>
                                            <button
                                                onClick={() => decrementQuantity(item.id)}
                                                className="border-black bg-white rounded px-2"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                        </div>
                                        {/* Display the total price for this item */}
                                        <div className="ml-4 text-xl font-semibold">
                                            Total: ${totalPrice.toFixed(2)} {/* Format total to 2 decimal places */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <div className="flex mx-2 items-center">
            <div className="mt-4 text-xl font-bold">
                Subtotal: ${subtotal.toFixed(2)} {/* Format subtotal to 2 decimal places */}
            </div>
            <button className="button bg-customBlue m-5" onClick={handleClick}>CHECKOUT</button>
        </div></div>
    );
};



export default CheckoutTest;
