import { useCart } from "../../../context/CartContext";

export default function ProductCart({ item }) {
    const { incrementQuantity, decrementQuantity, removeProduct } = useCart();
    const effectivePrice = item.discountedPrice ? item.discountedPrice : item.price;
    const totalPrice = effectivePrice * item.quantity;

    return (
        <li className="flex justify-between border-b border-t py-2">
                                <div className="flex w-full relative">
                                    <div className="container w-36 h-36 md:mx-4">
                                        <img
                                            src={item.image.url}
                                            alt={item.image.alt || "Product image"}
                                            className="object-cover w-full h-full rounded"
                                        />
                                    </div>
                                    <div className="flex m-2 justify-between items-center w-full">
                                        <div className="flex flex-col">
                                         <div className="flex flex-col">      
                                        <h1 className="text-lg w-auto">{item.title}</h1>
                
                                        <div className="flex">
                                            {item.discountedPrice < item.price ? (
                                                <p className=" text-2xl text-red-500">{item.discountedPrice}</p>  
                                            ) : (
                                                <p className="text-2xl">{item.discountedPrice}</p>
                                            )}
                                        </div>
                                        </div>
                                        <button className="bg-customBlue focus:outline-none hover:bg-blueHover rounded border-none m-5 absolute top-0 right-0" onClick={() => removeProduct(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                        </button>
                                        <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center me-2">
                                            <button
                                                onClick={() => incrementQuantity(item.id)}
                                                className="border-black bg-white rounded p-2 "
                                            >
                                                +
                                            </button>
                                            <span className="mx-2 text-lg font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => decrementQuantity(item.id)}
                                                className="border-black bg-white rounded p-2"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                        </div>
                                        <button className="button bg-customBlue m-5 absolute top-0 right-0" onClick={() => removeProduct(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                        </button>
                                        <div className="text-xl absolute bottom-0 right-0 font-semibold">
                                            Total: {totalPrice.toFixed(2)}
                                        </div>
                                        
                                        </div>
                                        
                                        </div>
                                        
                                    </div>
                                    </div>
                            </li>
    );
}