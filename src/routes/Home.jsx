import MainImg from "../components/MainImg/MainImg";
import ProductList from "../components/ProductList/ProductList";

export default function Home() {
    return <div className="flex flex-col w-full">
            <div className="block h-[110px] md:h-[70px] lg:hidden bg-customBlue"></div>
    <MainImg className="order-1"/>
    <ProductList className="order-2"/>
    </div>
}