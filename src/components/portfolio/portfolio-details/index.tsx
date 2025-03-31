import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import PortfolioDetailsArea from "./PortfolioDetailsArea"
import VolunteerVideo from "@/components/inner-pages/become-volunteers/VolunteerVideo"
import Brand from "@/components/common/Brand"

const PortfolioDetails = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Protfolio Details" page_list="Protfolio Details" style={false} />
            <PortfolioDetailsArea/>
            
            
         </main>
         <FooterOne />
      </>
   )
}

export default PortfolioDetails;
