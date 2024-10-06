import { useNavigate } from "react-router-dom";

export default function KeepShoppingBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <button className="bg-transparent border-none mt-10" onClick={handleClick}>Keep Shopping</button>
    );
}