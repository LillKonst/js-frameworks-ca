import MainImg from "../components/MainImg";
import ProductList from "../components/ProductList";

export default function Home() {
    return <div className="flex flex-col w-full">
    <MainImg className="order-1"/>
    <ProductList className="order-2"/>
    </div>
}