import Blog from "@/components/blogs/blog";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Blog Charite - Charity & Donation React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   )
}

export default index