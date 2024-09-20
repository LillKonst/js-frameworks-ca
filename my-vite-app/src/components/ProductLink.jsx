import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import url from "../api/api";

export default function ProductLink({ productId }) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`${APIUrl}/products/${productId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProduct(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setIsError(true);
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    if (isLoading) return <div>Loading product...</div>;
    if (isError) return <div>Error loading product.</div>;
    if (!product) return null; // Return null if product data isn't loaded

    return (
        <div className="p-3 col-span-3"> 
            <Link to={`/product/${product.id}`} className="block p-3 transition duration-300 ease-in-out hover:bg-gray-200 cursor-pointer">
                <div className="w-full aspect-w-3 aspect-h-4">
                    <img 
                        src={product.image.url} 
                        alt={product.image.alt || "Product image"} 
                        className="object-cover w-full h-full rounded"
                    />
                </div>
                <h2>{product.title}</h2>
                <div className="flex">
                    <p>{product.price}</p>
                    <p className="px-3">{product.discountedPrice}</p>
                </div>
            </Link>
        </div>
    );
}
