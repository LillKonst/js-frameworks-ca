import { Link } from "react-router-dom";

export default function ProductLink() {
    return (
        <div>
            <Link to="/product/id">
            

            </Link>
        </div>
    )
}

import React, {useState, useEffect } from "react";

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
    <div>
        {products.map((product) => (
            <div key={product.id} className="container p-3 "> 
                <img src={product.image.url} alt={product.image.alt || "Product image"}/>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <p>{product.discountedPrice}</p>
                <p>{product.rating}</p>
            </div>
        ))}
    </div>
);
}