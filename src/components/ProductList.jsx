import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../api/api";

export default function ProductList() {
    const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

    const [visibleProducts, setVisibleProducts] = useState(12);

    if (isLoading) {
      return <div>Loading products...</div>;
    }
  
    if (isError) {
      return <div>Error loading products...</div>;
    }

    const loadMoreProducts = () => {
        setVisibleProducts((prevVisible) => prevVisible + 12); // Load 12 more products
    };

return (
    <div className="flex flex-col justify-center items-center mx-2">
     <h1 className=" text-xl sm:text-2xl md:text-4xl">SHOP NOW</h1>
     <div className="grid grid-cols-12 gap-1 w-full mx-2">
        {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="p-3 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 "> 
             <Link to={`/product/${product.id}`} className="relative block transition duration-300 ease-in-out group">
                <div className="w-full aspect-w-3 aspect-h-4">
                        <img 
                            src={product.image.url} 
                            alt={product.image.alt || "Product image"} 
                            className="object-cover w-full h-full rounded"
                        />
                    </div>
                <h2 className="text-xl ms-1">{product.title}</h2>
                <div className="flex ms-1">
                {product.discountedPrice ? (
                <>
                    <p className="line-through">{product.price}</p>
                    <p className="text-red-500 px-3">{product.discountedPrice}</p>
                </>
                ) : (
                    <p>{product.price}</p>
                )}
                </div>
                <span className="absolute inset-0 flex items-center justify-center text-white rounded bg-gray-600 bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      View Product
                </span>
                </Link>
            </div>
        ))}
    </div>
    {visibleProducts < products.length && ( // Only show button if there are more products to load
                <button 
                    onClick={loadMoreProducts} 
                    className="mt-4 bg-customBlue py-2 px-4 rounded border-none"
                >
                    More Products
                </button>
            )}
    </div>
);
}