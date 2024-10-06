import KeepShoppingBtn from "../components/buttons/KeepShoppingBtn/KeepShoppingBtn";


export default function CheckoutSuccess () {
   return (
    <div className="">
      <div className="h-16"></div>
      <div className=" my-10 h-5/6 flex flex-col items-center">
          <h1 className="m-5 text-4xl">Thank you for your order</h1>
          <p className="text-lg">An email with your order has been sent!</p>
          <KeepShoppingBtn />
      </div>
    </div>
   ) 
}