import Breadcrumb from "@/components/common/Breadcrumb"
import ChooseArea from "@/components/homes/home-one/ChooseArea"
import FAQ from "@/components/homes/home-three/FAQ"
import Testimonial from "@/components/homes/home-three/Testimonial"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import PortfolioArea from "./PortfolioArea"

const Portfolio = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Recent Work" page_list="Portfolio" style={false} />
            <PortfolioArea />
            
         </main>
         <FooterOne />
      </>
   )
}

export default Portfolio;
