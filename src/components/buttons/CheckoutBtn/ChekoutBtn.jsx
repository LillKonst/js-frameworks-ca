import { useNavigate } from "react-router-dom";

export default function CheckoutBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/CheckoutSuccess");
    };

    return (
        <button className="button bg-customBlue my-5 font-semibold" onClick={handleClick}>CHECKOUT</button>
    );
}