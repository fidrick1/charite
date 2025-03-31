import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "About Charite - Charity & Donation React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <InnerAbout />
      </Wrapper>
   )
}

export default index