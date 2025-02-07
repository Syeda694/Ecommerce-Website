import Hero from "./component/Hero";
import FeaturedProducts from "./Homepage/Featured Products/page";
import LeatestProducts from "./Homepage/Leatest Products/page";
import ShoppexOffer from "./Homepage/Shoppex Offer/page";
import Sofa from "./Homepage/Sofa/page";
import TrendingProducts from "./Homepage/Trending Products/page";
import DiscountedItem from "./Homepage/Discount Items/page";
import TopCategories from "./Homepage/Top Categories/page";
import CoverImage from "./Homepage/CoverImage/page";


export default function Headingbar(){
    return(
        <div>
          <Hero />
          <FeaturedProducts />
          <LeatestProducts />
          <ShoppexOffer />
          <Sofa />
          <TrendingProducts />
          <DiscountedItem />
          <TopCategories />
          <CoverImage />
          
          
            
        </div>
    )
}
  