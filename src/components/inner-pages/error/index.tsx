import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Error Page" page_list="404" style={false} />
            <ErrorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default NotFound;
