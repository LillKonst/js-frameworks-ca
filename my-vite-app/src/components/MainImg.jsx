import mainImg from "../images/main-img.png";

export default function MainImg() {
    return <div className="mb-6 relative">
    <img src={mainImg} alt="flamingo with pink and blue background" className="w-full h-auto object-cover "/>
    <div className="absolute bottom-0 left-0 p-4 z-10">
        <div className="flex flex-col justify-start">
        <p className="text-3xl">Shop your</p>
        <p className="text-5xl">ESSENTIALS</p>
        <p className="text-3xl">from anywhere</p>
    </div>
    </div>
    </div>
}