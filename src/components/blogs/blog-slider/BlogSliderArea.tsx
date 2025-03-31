"use client"
import blog_data from "@/data/blogData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"

const BlogSliderArea = () => {

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      dots: true,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            }
         }
      ],
   }

   return (
      <div className="blog-slider-page pt-120 pb-120 rel z-1">
         <div className="container">
            <Slider {...settings} className="blog-page-slider row">
               {blog_data.filter((items) => items.page === "inner_page").slice(0, 4).map((item) => (
                  <div key={item.id} className="col-lg-4">
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
                           <h4><Link href={`/blog-details/${item.id}`}>tincidunt egeting semper</Link></h4>
                           <p>Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......</p>
                           <Link href={`/blog-details/${item.id}`} className="read-more">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default BlogSliderArea
