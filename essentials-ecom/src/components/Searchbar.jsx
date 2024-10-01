import { useState } from "react";
import { APIUrl } from "../api/api";

export default function Searchbar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = () => {
        fetch(`${APIUrl}`)
            .then((response) => response.json())
            .then((json) => {
                setResults(json.data);
                console.log(json);
        })
        .catch(err => console.error("Error fetching data:", err));
    }

    const handleSearch = (value) => {
        setQuery(value);
        if (value.length > 0) {
            fetchData(value);
        } else {
            setResults([]);         
        }
    };

    const filteredResults = results.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative">
            <form onSubmit={handleSearch} className="flex items-center px-3">
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
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
    
            {query.length > 0 && filteredResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 border border-gray-200 mt-1">
                <h2>Results</h2>
                    <ul>
                        {filteredResults.map((product, index) => (
                            <li key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b">
                                <img 
                                    src={product.image.url} 
                                    alt={product.image.alt || "Product Image"} 
                                    className="w-12 h-12 object-cover rounded mr-4" 
                                />
                                <span>{product.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
