import { useCart } from "../../../context/CartContext";

import { useNavigate } from "react-router-dom";

export default function CheckoutBtn() {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const handleClick = () => {
        clearCart();
        navigate("/CheckoutSuccess");
    };

    return (
        <button className="bg-customBlue focus:outline-none hover:bg-blueHover px-4 py-2 rounded border-none" onClick={handleClick}>CHECKOUT</button>
    );
}