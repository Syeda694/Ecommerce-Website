import Link from "next/link";
export default function TrendingProducts(){
    return(
        <div className="bg-[#FFFFFF] h-[700px] w-full">
            <h1 className="text-center text-2xl font-bold text-[#151875] mt-5 md:mt-28">Trending Products</h1>
           <div className=" grid grid-cols-2 md:flex space-x-5 mt-20 md:mt-10">
             
           <div className="hover:scale-105 duration-200 transition-all">
            <div className="w-[200px] h-[250px] bg-[#FFFFFF] ml-5 md:ml-[200px] shadow-sm">
                <div className="w-[167px] h-[164px] bg-[#F5F6F8] ml-4 mt-2">
                    <img src="/image 1171.png" alt="graychair" className="h-[140px] w-[150px] pt-5"></img>
                </div>
                <h3 className="text-md font-bold text-[#151875] text-center">Cantilever chair</h3>
                <div className="flex">
                <h5 className="text-sm font-light text-[#151875] ml-10">$26.00 </h5>
                <h6 className="text-sm font-light text-[#1518754D] ml-2">$42.00</h6>
                </div>
             </div>
             </div>

             <div className="hover:scale-105 duration-200 transition-all">
             <div className="w-[200px] h-[250px] bg-[#FFFFFF] shadow-sm">
                <div className="w-[167px] h-[164px] bg-[#F5F6F8] ml-4 mt-2">
                    <img src="/image 1170.png" alt="redchair" className="h-[140px] w-[150px] pt-5"></img>
                </div>
                <h3 className="text-md font-bold text-[#151875] text-center">Cantilever chair</h3>
                <div className="flex">
                <h5 className="text-sm font-light text-[#151875] ml-10">$26.00 </h5>
                <h6 className="text-sm font-light text-[#1518754D] ml-2">$42.00</h6>
                </div>
             </div>
             </div>

             <div className="hover:scale-105 duration-200 transition-all">
             <div className="w-[200px] h-[250px] bg-[#FFFFFF] shadow-sm">
                <div className="w-[167px] h-[164px] bg-[#F5F6F8] ml-4 mt-2">
                    <img src="/image 31.png" alt="whitechair" className="h-[140px] w-[150px] pt-5"></img>
                </div>
                <h3 className="text-md font-bold text-[#151875] text-center">Cantilever chair</h3>
                <div className="flex">
                <h5 className="text-sm font-light text-[#151875] ml-10">$26.00 </h5>
                <h6 className="text-sm font-light text-[#1518754D] ml-2">$42.00</h6>
                </div>
             </div>
             </div>

             <div className="hover:scale-105 duration-200 transition-all">
             <div className="w-[200px] h-[250px] bg-[#FFFFFF] shadow-sm">
                <div className="w-[167px] h-[164px] bg-[#F5F6F8] ml-4 mt-2">
                    <img src="/image 32 (1).png" alt="blackchair" className="h-[140px] w-[150px] pt-5"></img>
                </div>
                <h3 className="text-md font-bold text-[#151875] text-center">Cantilever chair</h3>
                <div className="flex">
                <h5 className="text-sm font-light text-[#151875] ml-10">$26.00 </h5>
                <h6 className="text-sm font-light text-[#1518754D] ml-2">$42.00</h6>
                </div>
             </div>
             </div>
           </div>
            
            <div className="flex space-x-2">

            <div className="hidden md:block bg-[#FFF6FB] w-[300px] h-[200px] mt-10 ml-[200px]">
            <h2 className="text-lg font-bold text-[#151875] mt-2">23% off in all products</h2>
            <div className="flex">
            <Link  href="/shopnow" className="text-sm underline text-[#FB2E86] mt-2">Shop Now</Link>
           <img src="/image 1162.png" alt="blackmachine" className="h-[150px] w-[150px]"></img>
           </div>
           </div>

           <div className="hidden md:block bg-[#EEEFFB] w-[300px] h-[200px] mt-10">
            <h2 className="text-lg font-bold text-[#151875] mt-2">23% off in all products</h2>
            <div className="flex">
            <Link  href="/shopnow" className="text-sm underline text-[#FB2E86] mt-2">ViewCollection</Link>
           <img src="/image 1161.png" alt="blackmachine" className="h-[100px] w-[200px] mt-10"></img>
           </div>
           </div>

           <div>

            <div className="h-[60px] w-[240px] bg-white mt-10 flex space-x-2">
                <div className="hidden md:block bg-[#F5F6F8] h-[60px] w-[90px]">
                    <img src="/image 30.png" alt="smallchair 1" className="ml-5 h-[50px] w-[50px] mt-2"></img>
                </div>
                <div className="hidden md:block">
                <h5 className="text-sm ml-1 mt-2 text-[#151875]">Executive Seat chair</h5>
                <h6 className="text-sm ml-1 text-[#151875]">$32.00</h6>
                </div>
                </div>

                <div className="h-[60px] w-[240px] bg-white mt-2 flex space-x-2">
                <div className=" hidden md:block bg-[#F5F6F8] h-[60px] w-[90px]">
                    <img src="/image 19 (1).png" alt="smallchair 2" className="ml-5 h-[50px] w-[50px] mt-2"></img>
                </div>
                <div className="hidden md:block">
                <h5 className="text-sm ml-1 mt-2 text-[#151875]">Executive Seat chair</h5>
                <h6 className="text-sm ml-1 text-[#151875]">$32.00</h6>
                </div>
                </div>

             <div className="h-[60px] w-[240px] bg-white mt-2 flex space-x-2">
                <div className="hidden md:block bg-[#F5F6F8] h-[60px] w-[90px]">
                    <img src="/image 28 (1).png" alt="smallchair 3" className="ml-5 mb-3 h-[50px] w-[50px]"></img>
                </div>
                <div className="hidden md:block">
                <h5 className="text-sm ml-1 mt-2 text-[#151875]">Executive Seat chair</h5>
                <h6 className="text-sm ml-1 text-[#151875]">$32.00</h6>
                </div>       

            </div>
           </div>


           </div>
        </div>
    )
}