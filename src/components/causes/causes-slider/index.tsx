import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import CauseSliderArea from "./CauseSliderArea"

const CauseSlider = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Causes Slider" page_list="Causes" style={false} />
            <CauseSliderArea />
            <Brand style={true} />
         </main>
         <FooterOne />
      </>
   )
}

export default CauseSlider
