import { useState } from "react";

export default function Searchbar(props) {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        props.onSearch(query);
        setQuery("");
    };

    return (
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
    );
};