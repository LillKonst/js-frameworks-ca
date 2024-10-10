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
        <button className="button bg-customBlue my-5 font-semibold" onClick={handleClick}>CHECKOUT</button>
    );
}