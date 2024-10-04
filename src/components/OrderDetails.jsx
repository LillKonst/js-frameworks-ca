import CheckoutBtn from "./buttons/CheckoutBtn/ChekoutBtn";

export default function OrderDetails({ subtotal }) { 
    const deliveryFee = 70;
    const total = subtotal + deliveryFee; 

    return (
        <div className="lg:m-10 p-5 rounded border-2 border-customBlue">
            <h1 className="text-2xl font-semibold border-b mb-5">Order Details</h1>
            <p className="font-semibold text-lg">Bag: {subtotal.toFixed(2)}</p>
            <p className="font-semibold text-lg">Standard Delivery: {deliveryFee}</p>
            <p className="font-semibold text-lg">Total: {total.toFixed(2)}</p> 

            <CheckoutBtn />
        </div>
    );
}
