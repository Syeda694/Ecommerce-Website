import Image from "next/image";


export default function About(){
    return(
        <div>
            <div className="w-full h-[200px] bg-[#F2F0FF]">
            <h2 className="text-4xl font-semibold text-[#101750] ml-[200px] pt-[80px]">About Us</h2>
            </div>
            
            <div className="bg-white w-full h-[400px] mt-20">
                        <div className="ml-[200px] flex">
                            <Image
                            src = {"/Rectangle 56.png"}
                            alt = {"About Page"} 
                            height={400}
                            width={400}/>

                            <div>
                                <h1 className="text-[#151875] font-semibold text-2xl ml-7">Know About Our Ecomerce<br/>
                                Business, History</h1>
                                <p className="mt-5 text-sm text-[#8A8FB9] ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae<br/> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>

                                <button className="mt-20 text-white text-lg bg-[#FB2E86] h-[40px] w-[100px] ml-7 text-center rounded">Contact us</button>

                            </div>
                        </div>
                    </div>

                    <div className=" h-[700px] md:h-[400px] w-full bg-white">
            <div>
                <h1 className="font-bold text-3xl text-center text-black mt-28 md:mt-10">Our Features</h1>
                <div className="grid grid-cols-2 ml-5 space-y-10 md:flex space-x-5 mt-5">

                 <div className="w-[200px] h-[250px] bg-[#FFFFFF] md:ml-[250px] shadow-sm mt-10">
                    <img src="/free-delivery 1.png" alt="freedelivery" className="ml-16 md:mt-7"></img>
                    <h3 className="font-semibold text-md text-center text-[#151875]">Free Delivery</h3>
                    <p className="text-sm font-light text-center text-[#1A0B5B4D] mt-3">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
                 </div>
                
                 <div className="w-[200px] h-[250px] bg-[#FFFFFF] md:ml-[250px] shadow-sm">
                    <img src="/cashback 1.png" alt="cashback" className="ml-16 md:mt-7"></img>
                    <h3 className="font-semibold text-md text-center text-[#151875]">100% Cash Back</h3>
                    <p className="text-sm font-light text-center text-[#1A0B5B4D] mt-3">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
                 </div>
                   
                 <div className="w-[200px] h-[250px] bg-[#FFFFFF] ml-[250px] shadow-sm ">
                    <img src="/Group (1).png" alt="winningtag" className="ml-20 mt-7"></img>
                    <h3 className="font-semibold text-md text-center text-[#151875]">Quality Product</h3>
                    <p className="text-sm font-light text-center text-[#1A0B5B4D] mt-3">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
                 </div>

                 <div className="w-[200px] h-[250px] bg-[#FFFFFF] ml-[250px] shadow-sm">
                    <img src="/Group (2).png" alt="phonecall facility" className="ml-16 mt-7"></img>
                    <h3 className="font-semibold text-md text-center text-[#151875]">24/7 Support</h3>
                    <p className="text-sm font-light text-center text-[#1A0B5B4D] mt-3">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
                 </div>

                </div>
            </div>
        </div>

        <div className="w-full h-[400px] bg-[#FBFBFF]">
            <h1 className="text-3xl font-bold text-black pt-10 text-center">Our Client Say!</h1>
            <Image 
            src ={"/Group 200.png"}
            alt ={"client Pictures"}
            height={150}
            width={150} 
            className="mt-7 ml-[670px]" />

            <div className="mt-4">
                <h4 className="text-lg font-semibold text-[#151875] ml-[680px]">Selina Gomez</h4>
                <h6 className="text-xs text-[#8A8FB9] ml-[680px]">Ceo At Webecy Digital</h6>
                <p className="text-sm text-[#8A8FB9] ml-[450px] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin</p>
                <p className="text-sm text-[#8A8FB9] ml-[470px]"> aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor</p>
                <p className="text-sm text-[#8A8FB9] ml-[650px]">aliquam lacus volutpat praesent.</p>
            </div>
            <Image
            src ={"/Group 89.png"}
            alt={"sections"}
            height={50}
            width={50}
            className="ml-[710px] mt-5" />
        </div>
        </div>
        
    )
}
