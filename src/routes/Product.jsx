import ProductDetails from "../components/cards/ProductDetails/ProductDetails";
import ReviewList from "../components/cards/ReviewList/ReviewList";
import useFetchProduct from "../hooks/useFetchProduct";

export default function Product() {
    const { product, isLoading, isError } = useFetchProduct();

    if (isLoading) {
        return <div>Loading product details...</div>;
    }

    if (isError) {
        return <div>Error loading product details.</div>;
    }

    if (!product) {
        return <div>No product data available.</div>;
    }
    
    return (
        <div>
            <div className="h-[110px] md:h-[70px]"></div>
           <ProductDetails product={product} />
           <ReviewList product={product} />
        </div>
    );
}