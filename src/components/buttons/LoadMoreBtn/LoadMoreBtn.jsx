export default function LoadMoreBtn({ loadMore, isVisible }) {
    if (!isVisible) return null;

    return (
        <button 
            onClick={loadMore} 
            className="mt-4 bg-customBlue py-2 px-4 rounded border-none"
        >
            More Products
        </button>
    );
}