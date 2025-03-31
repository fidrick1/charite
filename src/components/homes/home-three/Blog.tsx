import Image from "next/image"

import blogShape from "@/assets/img/shapes/three-round-yellow.png"
import blog_data from "@/data/blogData"
import Link from "next/link"

const Blog = () => {
   return (
      <div className="blog-area-three pb-90 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-60">
                     <span className="section-title__subtitle mb-10">Our Blog Post</span>
                     <h2>Our Latest <span>News & Update</span></h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati
                        consectetur adipisicing</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {blog_data.filter((item) => item.page === "home_3").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`blog-item--three ${item.item_bg}`}>
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog" />
                           <div className="post-date">
                              <b>{item.date}</b><span>dec</span>
                           </div>
                        </div>
                        <div className="blog-item__content">
                           <h4><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h4>
                           <Link href={`/blog-details/${item.id}`} className="read-more-two">Read More</Link>
                        </div>
                        <ul className="blog-item__meta">
                           <li><i className="flaticon-user"></i> <Link href="#">Wade Warren</Link></li>
                           <li className="line"></li>
                           <li><i className="flaticon-bubble-chat"></i> <Link href="#">05 Comment</Link></li>
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Image className="blog-shape-one top_image_bounce" src={blogShape} alt="Shape" />
      </div>
   )
}

export default Blog
