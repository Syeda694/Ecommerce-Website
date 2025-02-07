import Image from "next/image"
export default function Contact(){
    return(
        <div>
             <div className="w-full h-[200px] bg-[#F2F0FF]">
            <h2 className="text-4xl font-semibold text-[#101750] ml-[200px] pt-[80px]">Contact Us</h2>
            </div>

            <div className="bg-white w-full h-[300px] flex mt-28">
                <div className=" ml-[250px]">
                    <h1 className="text-2xl font-bold text-[#151875]">Information About us</h1>
                    <p className="text-sm text-[#8A8FB9] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices<br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae<br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <Image 
                    src={"/Group 94.png"}
                    alt ={"Circles"}
                    height={80}
                    width={80}
                    className="mt-11" />
                    </div>
                    <div className="ml-36">
                        <h1 className="text-2xl font-bold text-[#151875]">Contact Way</h1>
                        <div className="flex">
                            <div>
                           <div className="flex mt-5">
                            <div className="w-[30px] h-[30px] bg-[#5726DF] rounded-full"></div>
                            <div className="ml-3">
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">Tel: 877-67-88-99</h5>
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">E-Mail: shop@store.com</h5>
                            </div>
                            </div>
                            <div className="flex mt-8">
                            <div className="w-[30px] h-[30px] bg-[#FFB265] rounded-full"></div>
                            <div className="ml-3">
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">20 Margaret st, London</h5>
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">Great britain, 3NM98-LK</h5>
                          
                           </div>
                           </div>
                           </div>
                        
                           <div className="ml-10">
                           <div className="flex mt-5">
                            <div className="w-[30px] h-[30px] bg-[#FB2E86] rounded-full"></div>
                            <div className="ml-3">
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">Support Forum</h5>
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">For over 24hr</h5>
                            </div>
                            </div>
                            <div className="flex mt-8">
                            <div className="w-[30px] h-[30px] bg-[#1BE982] rounded-full"></div>
                            <div className="ml-3">
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">Free standard shipping</h5>
                                <h5 className="text-[#8A8FB9] text-xs font-extralight">on all orders.</h5>
                          
                           </div>
                           </div>
                           </div>
                        </div>
                    </div>
          

            </div>


            <div className="flex">
            <div className="w- full h-[500px] ml-[250px]">
                        <h1 className="text-2xl font-bold text-[#151875]">Get In Touch</h1>
                        <p className="text-sm text-[#8A8FB9] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices<br />  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <div className="flex  h-[40px] mt-8">
            <input
              type="text"
              placeholder="Your Name"
              className=" w-50 p-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "/>

<input
              type="text"
              placeholder="Your Email"
              className=" w-50 p-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-8 "/>
          </div>
          <div className="mt-7">
          <input
              type="text"
              placeholder="Subject"
              className=" w-[457px] h-[24px] p-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  "/>

</div>

<div className="mt-10">
          <input
              type="text"
              placeholder="Type Your Message"
              className="h-[150px] w-[457px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "/>

</div>

<button className="text-white bg-[#FB2E86] w-[100px] h-[36px] mt-7">Send Mail</button>




</div>
                    <div>
                        <Image 
                        src={"/Group 124.png"}
                        alt={"global"}
                        height={500}
                        width={500}
                        className="ml-7" />
                        
                        </div>

                    </div>
        </div>
    )
}