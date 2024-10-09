import KeepShoppingBtn from "../components/buttons/KeepShoppingBtn/KeepShoppingBtn";
import CheckoutSuccessNote from "../components/CheckoutSuccessNote";

export default function CheckoutSuccess () {
   return (
    <div className="flex flex-col items-center">
      <div className="h-16"></div>
        <CheckoutSuccessNote />
        <KeepShoppingBtn />
    </div>
   ) 
}