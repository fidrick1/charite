import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import CauseArea from "./CauseArea"
import Brand from "@/components/common/Brand"

const Causes = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Causes" page_list="Causes" style={false} />
            <CauseArea />
            <Brand style={true} />
         </main>
         <FooterOne />
      </>
   )
}

export default Causes
