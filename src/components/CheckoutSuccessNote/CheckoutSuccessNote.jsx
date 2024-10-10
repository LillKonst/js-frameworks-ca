import checkmarkImg from "../../images/checkmark.png";

export default function CheckoutSuccessNote () {
    return (
        <div className=" my-10 h-5/6 flex flex-col items-center">
        <h1 className="m-3 md:m-5 text-xl md:text-4xl">Thank you for your order</h1>
        <p className="text-sm md:text-lg">An email with your order has been sent!</p>
        <div className="container w-1/3 sm:w-1/4 md:w-1/4 mt-10">
        <img src={checkmarkImg} alt="green checkmark in a black circle" className="w-full h-auto object-cover "/>
        </div>
    </div>
    )
}