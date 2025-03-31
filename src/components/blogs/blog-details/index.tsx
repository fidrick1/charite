import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Blog Details" page_list="Blog Details" style={false} />
            <BlogDetailsArea/>
         </main>
         <FooterOne />
      </>
   )
}

export default BlogDetails;
