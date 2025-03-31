import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import BlogSliderArea from "./BlogSliderArea"

const BlogSlider = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Blog Slider" page_list="Blog" style={false} />
            <BlogSliderArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogSlider;
