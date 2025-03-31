import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import CauseDetailsArea from "./CauseDetailsArea"

const CauseDetails = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Cause Details" page_list="Cause Details" style={false} />
            <CauseDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default CauseDetails;
