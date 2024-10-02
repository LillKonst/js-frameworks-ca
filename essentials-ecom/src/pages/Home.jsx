import MainImg from "../components/MainImg";
import ProductList from "../components/ProductList";

export default function Home() {
    return <div className="flex flex-col w-full">
            <div className="block h-[70px] lg:hidden bg-customBlue"></div>
    <MainImg className="order-1"/>
    <ProductList className="order-2"/>
    </div>
}