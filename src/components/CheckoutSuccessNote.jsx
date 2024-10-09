import mainImg from "../images/main-img-copy.png";

export default function CheckoutSuccessNote () {
    return (
        <div className=" my-10 h-5/6 flex flex-col items-center">
        <h1 className="m-3 md:m-5 text-xl md:text-4xl">Thank you for your order</h1>
        <p className="text-sm md:text-lg">An email with your order has been sent!</p>
        <div className="container w-3/4 md:w-2/3 p-5">
        <img src={mainImg} alt="flamingo with pink and blue background" className="w-full h-auto object-cover "/>
        </div>
    </div>
    )
}