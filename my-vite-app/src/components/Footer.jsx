import logo from "../images/logo.svg";

export default function Footer() {
    return (
        <div className="flex flex-col p-4 w-full my-10">
           <div className="flex justify-between px-4 w-full">
            <div className="flex justify-center items-center">
                <p className="text-sm px-4">© ESSENTIALS 2024</p>  
                <p className="text-sm px-4"> ORG: 98765432 </p>
                <p className="text-sm">Website made by Lill-Kristine Konst</p>
            </div> 
            <div className="flex flex items-center justify-end">
                <a href="#" className="text-sm px-4 hover:underline">Terms and Conditions</a>
                <a href="#" className="text-sm hover:underline">Frequently asked questions</a>
            </div>
            </div>
            <img src={logo} alt="Logo" className="py-5 w-full"/>            
        </div>
    )
}