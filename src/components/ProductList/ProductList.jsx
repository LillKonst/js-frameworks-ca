import { useState } from "react";
import useApi from "../../api/api";
import ProductLink from "../cards/ProductLink/ProductLink";
import LoadMoreBtn from "../buttons/LoadMoreBtn/LoadMoreBtn";

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
        setVisibleProducts((prevVisible) => prevVisible + 12);
    };

return (
    <div className="flex flex-col justify-center items-center mx-2">
        <h1 className=" text-xl sm:text-2xl md:text-4xl">SHOP NOW</h1>
        <div className="grid grid-cols-12 gap-1 w-full mx-2">
        {products.slice(0, visibleProducts).map((product) => (
            <ProductLink key={product.id} product={product} /> 
        ))}
        </div>
        <LoadMoreBtn 
                loadMore={loadMoreProducts} 
                isVisible={visibleProducts < products.length}
        />
    </div>
);
}