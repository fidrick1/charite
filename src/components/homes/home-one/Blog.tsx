import blog_data from "@/data/blogData"
import Image from "next/image"
import Link from "next/link"

import blogShape_1 from "@/assets/img/shapes/three-round-yellow.png"

const HomeOneBlog = ({ style }: any) => {
   return (
      <div className={`pt-120 pb-90 rel z-1 ${style ? "blog-area-two overlay" : "blog-area"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-x col-lg-8 col-md-10">
                  <div className={`section-title text-center ${style ? "text-white mb-55" : "mb-60"}`}>
                     <span className="section-title__subtitle mb-10">Our Blog Post</span>
                     <h2>Our Latest <span>News & Update</span></h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {!style && blog_data.filter((item) => item.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className="blog-item">
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog" />
                           <div className="post-date">
                              <b>{item.date}</b>
                              <span>dec</span>
                           </div>
                        </div>
                        <div className="blog-item__content">
                           <ul className="blog-meta">
                              <li><i className="flaticon-user"></i> <Link href="#">Wade Warren</Link></li>
                              <li><i className="flaticon-bubble-chat"></i> <Link href="#">05 Comment</Link></li>
                           </ul>
                           <h4><Link href={`blog-details/${item.id}`}>{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link href={`blog-details/${item.id}`} className="read-more">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}

               {style && blog_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`blog-item blog-item--two ${item.item_bg}`}>
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog" />
                        </div>
                        <div className="blog-item__content">
                           <div className="post-date-two">
                              <b>{item.date}</b>
                              <span>may</span>
                           </div>
                           <ul className="blog-meta">
                              <li><i className="flaticon-user"></i> <a href="#">Wade Warren</a></li>
                              <li><i className="flaticon-bubble-chat"></i> <a href="#">05 Comment</a></li>
                           </ul>
                           <h4><Link href={`blog-details/${item.id}`}>{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link href={`blog-details/${item.id}`} className="read-more">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {style ? "" : <Image className="blog-shape-one top_image_bounce" src={blogShape_1} alt="Shape" />}
      </div>
   )
}

export default HomeOneBlog
