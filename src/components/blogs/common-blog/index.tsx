import SidebarCategory from "./SidebarCategory"
import SidebarCta from "./SidebarCta"
import SidebarRcPost from "./SidebarRcPost"
import SidebarSearch from "./SidebarSearch"
import SidebarTag from "./SidebarTag"

const BlogSidebar = () => {
   return (
      <div className="main-sidebar rmt-75">
         <SidebarSearch />
         <SidebarCategory />
         <SidebarRcPost />
         <SidebarTag />
         <SidebarCta />
      </div>
   )
}

export default BlogSidebar
