"use client"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import cause_data from "@/data/causeData"
import CircleProgress from "@/hooks/Circular"

const CauseSliderArea = () => {

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      fade: false,
      dots: true,
      // autoplaySpeed: 2000,
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
      <div className="our-cause-page pt-120 pb-140 rel z-1">
         <div className="container">
            <Slider {...settings} className="course-page-slider row">
               {cause_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className={`cause-two-item ${item.item_bg}`}>
                        <div className="image">
                           <Image src={item.img} alt="Cause" />
                        </div>
                        <div className="content">
                           <div className={`circle-progresss ${item.progress_bg}`}>
                              <div className="chart" data-percent="65">
                                 <span><CircleProgress finish={item.percentage} /></span>
                              </div>
                           </div>
                           <h4><Link href={`causes-details/${item.id}`}>{item.title}</Link></h4>
                           <div className="cause-price cause-price--green">
                              <span>Raised : ${item.raised}</span>
                              <span>Goal : ${item.goal}</span>
                           </div>
                           <p> {item.desc}</p>
                           <div className="cause-btn">
                              <Link className={`cr-btn ${item.btn_bg}`} href="#">Donation now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default CauseSliderArea
