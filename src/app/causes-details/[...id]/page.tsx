import CauseDetailsArea from "@/components/causes/causes-details/CauseDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import cause_data from "@/data/causeData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";

export const metadata = {
   title: "Cause Details Charite - Charity & Donation React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {
   const causes = cause_data.filter(items => items.page === "inner_page");
   const single_cause = causes.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <HeaderOne />
         <main>
            <Breadcrumb page_title="Cause Details" page_list="Cause Details" />
            <CauseDetailsArea single_cause ={single_cause} key={single_cause?.id} />
         </main>
         <FooterOne />
      </Wrapper>
   )
}

export default index