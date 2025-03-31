"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Slider from "react-slick"

import brand_1 from "@/assets/img/client-logo/client-logo1.png"
import brand_2 from "@/assets/img/client-logo/client-logo2.png"
import brand_3 from "@/assets/img/client-logo/client-logo3.png"
import brand_4 from "@/assets/img/client-logo/client-logo4.png"
import brand_5 from "@/assets/img/client-logo/client-logo5.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5]

const Brand = ({ style }: any) => {

   const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 375,
            settings: {
               slidesToShow: 1,
            }
         }
      ],
   }

   return (
      <div className={`client-logo-area ${style ? "py-75" : "bgc-lighter py-30"}`} style={{ backgroundImage: `${style && "url(/assets/img/client-logo/client-logo-section-bg.jpg)"}` }}>
         <div className={`container ${style ? "container-1370" : ""}`}>
            <Slider {...settings} className="client-logo-wrap">
               {brand_data.map((brand, index) => (
                  <div key={index} className="client-logo-item">
                     <Link href="#"><Image src={brand} alt="Client Logo" /></Link>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default Brand;
