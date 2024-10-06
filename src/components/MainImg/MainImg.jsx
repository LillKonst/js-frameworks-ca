import mainImg from "../../images/main-img-copy.png";
import mainImgSm from "../../images/main-img-sm.png";

export default function MainImg() {
    return <div className="mb-6 relative">
    <img src={mainImg} alt="flamingo with pink and blue background" className="hidden md:block w-full h-auto object-cover "/>
    <img src={mainImgSm} alt="flamingo with pink and blue background" className="block md:hidden w-full h-auto object-cover "/>
    <div className="absolute bottom-1 left-1  p-1 sm:p-5 z-10">
        <div className="flex flex-col justify-start">
        <p className="text-2xl sm:text-3xl">Shop your</p>
        <p className="text-4xl sm:text-5xl">ESSENTIALS</p>
        <p className="text-2xl sm:text-3xl">from anywhere</p>
    </div>
    </div>
    </div>
}