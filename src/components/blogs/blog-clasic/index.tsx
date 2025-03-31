import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import BlogClasicArea from "./BlogClasicArea"

const BlogClasic = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Blog Clasic" page_list="Blog" style={false} />
            <BlogClasicArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogClasic;
