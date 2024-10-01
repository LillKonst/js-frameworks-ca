import { useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";

export default function Searchbar(props) {
    // Connect to API here later
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const inputRef = useRef();

    // Memoized filter to avoid unnecessary recalculations
    const filteredProducts = useMemo(() => {
        return products.filter(product => 
            product.toLowerCase().includes(query.toLowerCase())
        );
    }, [products, query]);

    const handleSearch = (e) => {
        e.preventDefault();
        props.onSearch(query);
        setQuery("");
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="flex items-center px-3">
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="border bg-white/50 border-gray-300 rounded-l-md p-2"
                />
                <button
                    type="submit"
                    className="bg-customBlue text-black rounded p-2"
                >
                    Search
                </button> 
            </form>
            <div>
                <h2>Results</h2>
                <div>
                    {filteredProducts.map((product, index) => (
                        <div key={index}>{product}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

