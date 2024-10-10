export default function LoadMoreBtn({ loadMore, isVisible }) {
    if (!isVisible) return null;

    return (
        <button 
            onClick={loadMore} 
            className="bg-customBlue focus:outline-none hover:bg-blueHover px-4 py-2 rounded border-none"
        >
            More Products
        </button>
    );
}