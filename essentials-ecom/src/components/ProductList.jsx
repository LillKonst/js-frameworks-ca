import { Link } from "react-router-dom";
import APIUrl from "../api/api"
import useApi from "../api/api";

export default function ProductList() {
    const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

    if (isLoading) {
      return <div>Loading products...</div>;
    }
  
    if (isError) {
      return <div>Error loading products...</div>;
    }

return (
    <div className="flex flex-col justify-center items-center mx-2">
     <h1 className="text-4xl">SHOP NOW</h1>
     <div className="grid grid-cols-12 gap-1 w-full mx-2">
        {products.map((product) => (
            <div key={product.id} className="p-3 col-span-3 "> 
             <Link to={`/product/${product.id}`} className="relative block transition duration-300 ease-in-out group">
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
                <span className="absolute inset-0 flex items-center justify-center text-white rounded bg-gray-600 bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      View Product
                </span>
                </Link>
            </div>
        ))}
    </div>
    </div>
);
}