 export default function Sofa(){
    return(
        <div className="w-full h-[400px] bg-[#F1F0FF]">
            <div className=" ml-16 md:ml-[200px] flex space-x-4">
            <img src="Group 153.png" alt="blueSofa" className=" hidden md:block h-[400px] w-[400px] pt-5"></img>
            <div>
            <h1 className="font-bold text-xl md:text-2xl text-blue-950 mt-16 md:mt-16">Unique Features Of leatest & <br/>Trending Poducts</h1>
            <ul className="mt-3">
                <li className="flex space-x-2">
                    <div className="h-2 w-2 bg-[#F52B70] mt-2 rounded-lg"></div>
                    <h5 className="text-sm font-light text-[#ACABC3]">All frames constructed with hardwood <br /> solids and laminates</h5>
                </li>

                <li className="flex space-x-2 mt-3">
                <div className="h-2 w-2 bg-[#2B2BF5] mt-2 rounded-lg"></div>
                <h5 className="text-sm font-light text-[#ACABC3]">Reinforced with double wood dowels,glue,<br /> screw - nails corner  blocks and machine nails</h5>
                </li>

                <li className="flex space-x-2 mt-3">
                <div className="h-2 w-2 bg-[#2BF5CC] mt-2 rounded-lg"></div>
                <h5 className="text-sm font-light text-[#ACABC3]">Arms, backs and seats <br /> are structurally reinforced</h5>
                </li>
            </ul>
            <div className="flex space-x-2">
            <button className="bg-[#F52B70] text-[#FFFFFF] mt-5 h-[35px] w-[120px] rounded-sm">Add To Cart</button>
            <div>
            <h5 className=" hidden md:block text-sm font-light text-[#151875] mt-5">B&B Italian Sofa </h5>
            <h5 className=" hidden md:block text-sm font-light text-[#151875]">$32.00</h5>
            </div>
            </div>
            
</div>
        </div>
        </div>
    )

}