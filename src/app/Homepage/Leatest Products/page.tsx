import Link from "next/link";
export default function LeatestProducts(){
  return(
    <div className="bg-white h-[1500px] md:h-[700px] w-full">
      <h1 className="text-[#151875] text-4xl md:text-2xl font-bold text-center">Leatest Products</h1>
      <nav className="flex justify-center">
        <ul className="hidden md:block space-x-5">
        <Link href="/newarrival" className="text-[#FB2E86] underline">NewArrival</Link>
        <Link href="bestseller" className="text-[#151875]">BestSeller</Link>
        <Link href="featured" className="text-[#151875]">Featured</Link>
        <Link href="specialoffer" className="text-[#151875]">SpecialOffer</Link>
        </ul>
      </nav>
      <div> 
        <div className="overflow-hidden  box_shadow rounded-lg ml-20 space-y-10 md:ml-[200px] md:flex space-x-10 items-center mt-8">

        <div>
        <div className="hover:scale-105 duration-200 transition-all">
      <div className="w-[300px] ml-8 h-[180px] bg-[#F6F7FB]">
        <img src="/image 1166.png" alt="Pinkishchair" className="h-[180px] w-[173px] ml-16 mt-5 pt-4"></img>
        </div>
        <div className="bg-white flex">
          <h5 className="text-sm ml-7 font-light text-[#151875]">Comfort Handy Craft</h5>
          <h6 className="text-sm font-extralight text-[#151875] ml-16">$42.00</h6>
          <h6 className="text-sm font-extralight text-[#FB2448]">$65.00</h6>
          </div>
      </div>
      </div>

      <div>
      <div className="hover:scale-105 duration-200 transition-all">
      <div className="w-[300px] h-[180px] bg-white">
        <img src="/image 15.png" alt="Yellowishchair" className="h-[180px] w-[173px] ml-16 mt-5 pt-4"></img>
        </div>
        <div className="bg-white flex">
          <h5 className="text-sm font-light text-[#151875]">Comfort Handy Craft</h5>
          <h6 className="text-sm font-extralight text-[#151875] ml-16">$42.00</h6>
          <h6 className="text-sm font-extralight text-[#FB2448]">$65.00</h6>
          </div>
      </div>
      </div>

        <div>
        <div className="hover:scale-105 duration-200 transition-all">
      <div className="w-[300px] h-[180px] bg-[#F6F7FB]">
        <img src="/image 1168.png" alt="longchair" className="h-[180px] w-[173px] ml-16 mt-5 pt-4"></img>
        </div>
        <div className="bg-white flex">
          <h5 className="text-sm font-light text-[#151875]">Comfort Handy Craft</h5>
          <h6 className="text-sm font-extralight text-[#151875] ml-16">$42.00</h6>
          <h6 className="text-sm font-extralight text-[#FB2448]">$65.00</h6>
          </div>
      </div>
      </div>
      </div>
     </div>

     <div> 
        <div className="overflow-hidden  box_shadow rounded-lg ml-20 md:ml-[200px] space-y-10 md:flex space-x-10 items-center mt-5 md:mt-20">

        <div>
        <div className="hover:scale-105 duration-200 transition-all ml-10 md:mt-16">
      <div className="w-[300px] h-[180px] bg-[#F6F7FB]">
        <img src="/image 23.png" alt="sofachair" className="h-[180px] w-[173px] ml-16 mt-5 pt-4"></img>
        </div>
        <div className="bg-white flex">
          <h5 className="text-sm font-light text-[#151875]">Comfort Handy Craft</h5>
          <h6 className="text-sm font-extralight text-[#151875] ml-16">$42.00</h6>
          <h6 className="text-sm font-extralight text-[#FB2448]">$65.00</h6>
          </div>
          </div>
          </div>

          <div>
          <div className="hover:scale-105 duration-200 transition-all">
      <div className="w-[300px] h-[180px] bg-[#F6F7FB]">
        <img src="/image 32 (1).png" alt="stylishchair" className="h-[180px] w-[173px] ml-16 mt-5 pt-4"></img>
        </div>
        <div className="bg-white flex">
          <h5 className="text-sm font-light text-[#151875]">Comfort Handy Craft</h5>
          <h6 className="text-sm font-extralight text-[#151875] ml-16">$42.00</h6>
          <h6 className="text-sm font-extralight text-[#FB2448]">$65.00</h6>
          </div>
          </div>
          </div>

          <div>
          <div className="hover:scale-105 duration-200 transition-all">
      <div className="w-[300px] h-[180px] bg-[#F6F7FB]">
        <img src="/image 3.png" alt="offwhitechair" className="h-[180px] w-[200px] ml-16 mt-5 pt-4"></img>
        </div>
        <div className="bg-white flex">
          <h5 className="text-sm font-light text-[#151875]">Comfort Handy Craft</h5>
          <h6 className="text-sm font-extralight text-[#151875] ml-16">$42.00</h6>
          <h6 className="text-sm font-extralight text-[#FB2448]">$65.00</h6>
          </div>
          </div>
          </div>

       
     </div>
     </div>
      </div>
     
  )
}