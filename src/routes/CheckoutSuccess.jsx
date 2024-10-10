import KeepShoppingBtn from "../components/buttons/KeepShoppingBtn/KeepShoppingBtn";
import CheckoutSuccessNote from "../components/CheckoutSuccessNote/CheckoutSuccessNote";

export default function CheckoutSuccess () {
   return (
    <div className="flex flex-col items-center">
      <div className="h-[110px] md:h-[70px]"></div>
        <CheckoutSuccessNote />
        <KeepShoppingBtn />
    </div>
   ) 
}