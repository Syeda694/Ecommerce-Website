import Link from "next/link";
export default function DiscountedItem(){
    return(
        <div className="h-[500px] w-full bg-white">

            <h1 className="font-bold text-3xl md:text-2xl text-[#151875] text-center">Discount Item
            </h1>
            <ul className="flex space-x-5 ml-[510px] mt-2">
                <Link href="/woodchair" className=" hidden md:block text-sm text-[#FB2E86]">Wood Chair</Link>
                <Link href="/plasticchair" className="text- hidden md:block text-[#151875]">Plastic Chair</Link>   
                <Link href="sofacollection" className="text-sm hidden md:block text-[#151875]">Sofa Colletion</Link>         
                </ul>
                <h1 className=" md:hidden ml-28 text-xl font-semibold text-[#151875] mt-10">20% Discount of All Products</h1>
            <div className="flex">
                <div className=" hidden md:block ml-[200px]">
                <h1 className="text-xl font-semibold text-[#151875] mt-20">20% Discount Of All Products</h1>
                <h3 className="text-lg font-semibold text-[#FB2E86] mt-5">Eams Sofa Compact</h3>
                <p className="text-sm font-normal text-[#B7BACB] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</p>
                <ul className="mt-3">
                    <h1 className="flex space-x-10">
                    <li className="flex">
                        <img src="Vector (3).png" alt="tick vector" className="w-[14px] h-[9px]"></img>
                        <h6 className="text-sm font-normal text-[#B8B8DC]">Material expose like metals</h6>
                    </li>
                    <li className="flex">
                    <img src="Vector (3).png" alt="tick vector" className="w-[14px] h-[9px]"></img>
                    <h6 className="text-sm font-normal text-[#B8B8DC]">Clear lines and geomatric figures</h6>
                    </li>
                    </h1>

                    <h1 className="flex space-x-10">
                    <li className="flex">
                        <img src="Vector (3).png" alt="tick vector" className="w-[14px] h-[9px]"></img>
                        <h6 className="text-sm font-normal text-[#B8B8DC]">Simple neutral colours.</h6>
                    </li>

                    <li className="flex">
                    <img src="Vector (3).png" alt="tick vector" className="w-[14px] h-[9px]"></img>
                    <h6 className="text-sm font-normal text-[#B8B8DC]">Material expose like metals</h6>
                    </li>
                    </h1>
                </ul>
                <button className="bg-[#FB2E86] text-[#FFFFFF] mt-10 h-[50px] w-[150px]">Shop Now</button>
                </div>
                <div>
                <img src="tortuga-01-b 1.png" className="h-[400px] w-[450px]"></img>
            </div>
            </div>
            
        </div>
    )
}