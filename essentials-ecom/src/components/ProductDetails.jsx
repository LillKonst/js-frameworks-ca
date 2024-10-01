import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {APIUrl} from "../api/api";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchProduct(APIUrl) {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await fetch(`${APIUrl}/${id}`);
                const data = await response.json();
                
                setProduct(data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProduct(APIUrl);

    }, [id]);

    const handleAddToCart = () => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ));
            console.log('Updated cart (increment quantity):', cart); // Log after updating quantity
        } else {
            const newCart = [...cart, { ...product, quantity: 1 }];
            setCart(newCart);
            console.log('Updated cart (added new product):', newCart); // Log new cart after adding product
        }
        console.log('Current cart state:', cart); // Log the cart state each time after an add
    };

    
    if (isLoading) {
        return <div>Loading product details...</div>;
    }

    if (isError) {
        return <div>Error loading product details.</div>;
    }

    if (!product) {
        return <div>No product data available.</div>;
    }

    console.log(product);

    return (
        <div className="p-4">
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
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <div className="flex">
                            <p className="text-xl font-semibold">{product.price}</p>
                            {product.discountedPrice && (
                                <p className="text-xl px-3 text-red-500">{product.discountedPrice}</p>
                            )}
                        </div>
                        <p className="text-lg my-5">{product.description}</p>
                        <button className="button bg-customBlue mt-5 w-full" onClick={handleAddToCart} >ADD</button>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-9">
                    <h2 className="mt-4 text-3xl border-b">Reviews</h2>
                    {product.reviews && product.reviews.length > 0 ? (
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
        </div>
    );
}
