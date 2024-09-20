import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIUrl from "../api/api"; // Your API URL

export default function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${APIUrl}/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }
                const data = await response.json();
                console.log("Fetched Product Data:", data);
                setProduct(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return <div>Loading product details...</div>;
    }

    if (isError) {
        return <div>Error loading product details.</div>;
    }

    return (
        <div className="p-4">
            {product && (
                <div className="max-w-5xl mx-auto">
                <div className="flex justify-start mx-5">
                    <div className="flex-1 container aspect-w-2 aspect-h-1 h-80 mx-4">
                         <img
                            src={product.image.url}
                            alt={product.image.alt || "Product image"}
                            className="object-cover w-full h-full rounded"
                        /> 
                    </div> 
                    <div className="flex flex-1 flex-col m-2 col">
                        <h1 className="text-2xl font-bold ">{product.title}</h1>
                    <div className=" flex ">
                        <p className="text-xl font-semibold">{product.price}</p>
                        {product.discountedPrice && (
                            <p className="text-xl px-3 text-red-500">{product.discountedPrice}</p>
                        )}
                    </div>
                    <p className="text-lg my-5">{product.description}</p>
                    <button className="button bg-customBlue mt-5 w-full">ADD</button>
                    <div className="flex flex-col mt-4 self-start">
                    <h2 className="mt-1 me-2 text-xl">Rating: {product.rating}</h2>
                    <div className="flex items-center">
                        <h2 className="mt-1 me-2 text-xl">Tags: </h2>
                        <div className="flex space-x-2 mt-2">
                            {product.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                            {tag}
                            </span>
                            ))}
                        </div>
                    </div></div>
                </div>
                </div>
                <div className="mx-9">
                <h2 className="mt-4 text-3xl border-b">Reviews</h2>
                    {product.reviews.length > 0 ? (
                      product.reviews.map(review => (
                    <div key={review.id} className="my-5 py-2">
                        <p className="font-semibold">{review.username}</p>
                        <p>{review.description}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
                
                </div>
                </div>
            )}
        </div>

    );
}
