import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

export default function Product() {
    const { id } = useParams();
    // Fetch product details using the id

    return (
        <div>
            <div className="h-20"></div>
           <ProductDetails />
        </div>
    );
}