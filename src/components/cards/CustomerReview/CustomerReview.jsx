export default function CustomerReview ({ review }) {
    return (
        <div className="my-5 py-2">
            <p className="font-semibold text-xl">{review.username}</p>
            <p>{review.description}</p>
            <p className="font-semibold">Rating: {review.rating}</p>
        </div>
    );
}