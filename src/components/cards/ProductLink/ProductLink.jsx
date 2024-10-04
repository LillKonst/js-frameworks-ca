import { Link } from "react-router-dom";

export default function ProductLink({ product }) {
  
    return (
        <Link to={`/product/${product.id}`} className="relative block transition duration-300 ease-in-out group m-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <div className="w-full aspect-w-3 aspect-h-4">
                <img 
                    src={product.image.url} 
                    alt={product.image.alt || "Product image"} 
                    className="object-cover w-full h-full"
                />
                <span className="absolute inset-0 flex items-center justify-center text-2xl text-white bg-gray-600 bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                VIEW PRODUCT
                </span>
            </div>
            <h2 className="text-md ms-1">{product.title}</h2>
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
        </Link>
    );
}
