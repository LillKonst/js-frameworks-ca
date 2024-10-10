import { Link } from "react-router-dom";

export default function ProductLink({ product }) {
    const discountPercentage = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : null;

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Link to={`/product/${product.id}`} onClick={handleScrollToTop} className="relative block transition duration-300 ease-in-out group m-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <div className="w-full aspect-w-3 aspect-h-4">
                <img 
                    src={product.image.url} 
                    alt={product.image.alt || "Product image"} 
                    className="object-cover w-full h-full rounded"
                />
                <span className="absolute inset-0 flex items-center justify-center rounded text-2xl text-white bg-gray-600 bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                VIEW PRODUCT
                </span>
            </div>
            <h2 className="text-md ms-1">{product.title}</h2>
            <div className="flex ms-1">
            <p className="text-xl">${product.discountedPrice}</p>
                    {product.discountedPrice < product.price && (
                        <p className="text-md mx-3 text-red-500">({discountPercentage}% off)</p>
                    )}
            </div>
        </Link>
    );
}
