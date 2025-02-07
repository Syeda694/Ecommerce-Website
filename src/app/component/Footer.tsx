import Image from "next/image";
import {
  ClerkProvider,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function Footer() {
    return (
      <div>
        <Image 
        src={"/image 1174.png"}
        alt={"companies"}
        height={900}
        width={900} 
        className="ml-[300px]"/>
        <footer className="w-full bg-[#EEEFFB] py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Hekto Column */}
              <div className="flex flex-col">
                <h3 className="font-semibold font-sans text-3xl text-black mb-4">Hekto</h3>
                 {/* Logo and Sign Up button in the same flex container */}
              <div className=" mb-4 flex"> {/* Using flex-row for horizontal alignment */}
                {/* <img className="w-[250px] h-[39px] bg-[#FFFFFF] rounded-sm" src="/Rectangle 32.png" alt="Hekto Logo" />
                 */}
                 <div className="flex h-[30px]">
            <input
              type="text"
              placeholder="Enter Email Address"
              className=" w-45 md:w-50 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
                {/* Correcting the button's shape */}
                <ClerkProvider>
                <SignedOut>
            <SignUpButton>
              <button className='text-white bg-[#FB2E86] w-[150px] rounded'>
              SignUp
              </button>
               </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </ClerkProvider>

              </div>
                <div className="text-sm font-light text-[#8A8FB9]">
                  <p>Contact Info</p>
                  <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
              </div>
  
              {/* Categories Column */}
              <div className="flex flex-col ml-[100px]">
                <h4 className="font-semibold text-lg text-[#000000] mb-3">Categories</h4>
                <ul className="text-sm font-light text-[#8A8FB9]">
                  <li className="mt-4">Laptops&Computers</li>
                  <li className="mt-4">Cameras&Photography</li>
                  <li className="mt-4">SmartPhones&Tablets</li>
                  <li className="mt-4">VideoGames&Consoles</li>
                  <li className="mt-4">WaterproofHeadphones</li>
                </ul>
              </div>
              <div className="flex flex-col ml-8">
                <h4 className="font-semibold text-lg text-[#000000] mb-3">Customer Care</h4>
                <ul className="text-sm font-light text-[#8A8FB9]">
                    <li className="mb-4">My Account</li>
                    <li className="mb-4">Discounts</li>
                    <li className="mb-4">Returns</li>
                    <li className="mb-4">Orders History</li>
                    <li className="mb-4">Order Tracking</li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <h4 className="font-semibold text-lg text-[#000000] mb-3">Pages</h4>
                <ul className="text-sm font-light text-[#8A8FB9]">
                    <li className="mb-4">Blog</li>
                    <li className="mb-4">Browse the Shop</li>
                    <li className="mb-4">Category</li>
                    <li className="mb-4">Pre-Built Pages</li>
                    <li className="mb-4">Visual Composer Elements</li>
                    <li className="mb-4">WooCommerce Pages</li>
                </ul>
              </div>
              </div>
              </div>
              </footer>
              <div className="w-full h-[53px] gap-0 bg-[#E7E4F8] flex justify-center space-x-5">
                <img src="/Group 202.png" alt="Facebook Icon" className="w-7 h-7 mt-3" />
                <img src="/Group 203.png" alt="Instagram Icon" className="w-7 h-7 mt-3" />
                <img src="/Group 204.png" alt="Twitter Icon" className="w-7 h-7 mt-3" />
              </div>
              </div>
    )
}
  
  