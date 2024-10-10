import mainImg from "../../images/main-img-copy.png";
import mainImgSm from "../../images/main-img-sm.png";
import testImg from "../../images/test-img-small.jpg"

export default function MainImg() {
    return <div className="mb-6 relative">
    <img src={testImg} alt="flamingo with pink and blue background" className="hidden md:block w-full h-auto object-cover "/>
    <img src={testImg} alt="flamingo with pink and blue background" className="block md:hidden w-full h-auto object-cover "/>
    <div className="absolute bottom-1 left-1 sm:p-5 z-10">
        <div className="flex flex-col justify-start">
        <p className="text-base xs:text-2xl md:text-3xl lg:text-4xl">Shop your</p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">ESSENTIALS</p>
        <p className="text-base xs:text-2xl md:text-3xl lg:text-4xl">from anywhere</p>
    </div>
    </div>
    </div>
}