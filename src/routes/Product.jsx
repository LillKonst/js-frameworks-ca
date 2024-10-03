import { useParams } from "react-router-dom";
import ProductDetails from "../components/cards/ProductDetails/ProductDetails";

export default function Product() {
    const { id } = useParams();

    return (
        <div>
            <div className="h-20"></div>
           <ProductDetails />
        </div>
    );
}