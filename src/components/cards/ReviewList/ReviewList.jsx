import CustomerReview from "../CustomerReview/CustomerReview"

export default function ReviewList({product}) {
    return (
    <div className="mx-9">
                    <h2 className="mt-4 text-3xl border-b">Reviews</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.map(review => (
                            <CustomerReview key={review.id}  review={review}/>
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )}
                </div>
    );
}