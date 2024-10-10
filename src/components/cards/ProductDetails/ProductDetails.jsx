import AddToCartBtn from "../../buttons/AddToCartBtn/AddToCartBtn";

export default function ProductDetails({ product }) {
    const discountPercentage = product.discountedPrice 
        ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
        : null;

    return (
        <div className=" p-1 md:p-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center mx-5">
                    <div className="flex-1 container md:mx-5 aspect-w-2 aspect-h-1 h-fit md:h-80">
                        <img
                            src={product.image.url}
                            alt={product.image.alt || "Product image"}
                            className="object-cover w-full h-full rounded"
                        />
                    </div>
                    <div className="flex flex-1 flex-col my-2 col md:mx-2">
                        <h1 className="text-2xl font-semibold">{product.title}</h1>
                        <div className="flex">
                        {/* {product.discountedPrice ? (
                <>
                    <p className="text-xl line-through">{product.price}</p>
                    <p className="text-xl text-red-500 px-3">{product.discountedPrice}</p>
                </>
                ) : (
                    <p>{product.price}</p>
                )} */}
                <div className="flex items-center">
                    <p className="text-xl">${product.discountedPrice}</p>
                    {product.discountedPrice < product.price && (
                        <p className="text-md mx-3 text-red-500">({discountPercentage}% off)</p>
                    )}
                </div>
                        </div>
                        <p className="text-lg my-5">{product.description}</p>
                        <AddToCartBtn product={product} />
                        <div className="flex flex-col mt-4 self-start">
                            <h2 className="mt-1 me-2 text-md font-semibold">Rating: {product.rating}</h2>
                            <div className="flex items-center">
                                <h2 className="mt-1 me-2 text-md font-semibold">Tags: </h2>
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
            </div>
        </div>
    );
}
