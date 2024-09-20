// export default function ProductList() {
// return (
//     <div className="flex flex-col justify-center items-center">
//         <h1>SHOP NOW</h1>
//         <div>PRODUCTLIST WILL COME HERE...</div>
//     </div>
// )
// }


import {useState, useEffect } from "react";

const url = "https://v2.api.noroff.dev/online-shop";

export default function ProductList() {
const [products, setProducts ] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
    async function getData() {
        try { 
            setIsError(false);
            setIsLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            console.log("Full API Response:", json);
            setProducts(json.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    }

    getData();
}, []);

if (isLoading) {
    return <div>Loading products</div>;
}

if (isError) {
    return <div>Error Loading data</div>;
}

return (
    <div className="flex flex-col justify-center items-center mx-2">
     <h1 className="text-4xl">SHOP NOW</h1>
     <div className="grid grid-cols-12 gap-1 w-full mx-2">
        {products.map((product) => (
            <div key={product.id} className="p-3 col-span-3 "> 
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
            </div>
        ))}
    </div>
    </div>
);
}