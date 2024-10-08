import { useState } from "react";
import { useCart } from "../../../context/CartContext";

export default function AddToCartBtn({ product }) {
    const { addToCart } = useCart();
    const [itemAddedMessage, setItemAddedMessage] = useState("");

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            setItemAddedMessage("Your item has been added.");
            setTimeout(() => {
                setItemAddedMessage("");
            }, 3000);
        }
    };

    return(
        <div>
            <button className="bg-customBlue focus:outline-none hover:bg-blueHover px-4 py-2 rounded border-none mt-5 w-full" onClick={handleAddToCart} >ADD</button>
            {itemAddedMessage && ( 
                <p className="mt-2 text-green-500">{itemAddedMessage}</p>
            )}
        </div>
    );
}