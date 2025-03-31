import blog_data from "@/data/blogData"
import Image from "next/image"
import Link from "next/link"

const SidebarRcPost = () => {
   return (
      <div className="widget widget-recent-post">
         <h4 className="widget-title">Recent News</h4>
         <ul>
            {blog_data.filter((items) => items.page === "rc_post").map((item) => (
               <li key={item.id}>
                  <div className="media">
                     <div className="media-left">
                        <Image src={item.thumb} alt="Post" />
                     </div>
                     <div className="media-body">
                        <h6 className="title"><Link href="/blog-details">{item.title}</Link></h6>
                        <ul className="post-info">
                           <li><i className="flaticon-time"></i> <Link href="#">{item.date} Dec, 2022</Link></li>
                           <li><i className="fas fa-user"></i> <Link href="#">Robert Fox</Link></li>
                        </ul>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SidebarRcPost
