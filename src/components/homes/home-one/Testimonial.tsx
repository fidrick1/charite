"use client"
import Image from "next/image"
import React, { useRef, useEffect } from "react";
import Slider from 'react-slick'
import testimonial_data from "@/data/testimonialData";

import testimonialImg_1 from "@/assets/img/testimonials/testimonial-left.png"
import testimonialThumb_1 from "@/assets/img/testimonials/testi-thumb1.jpg"
import testimonialThumb_2 from "@/assets/img/testimonials/testi-thumb2.jpg"
import testimonialThumb_3 from "@/assets/img/testimonials/testi-thumb3.jpg"

const Testimonial = () => {

   const slider1Ref = useRef<Slider | null>(null);
   const slider2Ref = useRef<Slider | null>(null);

   useEffect(() => {
      if (slider1Ref.current && slider2Ref.current) {
         slider1Ref.current.slickGoTo(2);
      }
   }, []);

   return (
      <div className="testimonials-area bgc-black bgs-cover py-120" style={{ backgroundImage: `url(/assets/img/testimonials/testimonial-bg.png)` }}>
         <div className="container">
            <div className="row gap-100 align-items-center">
               <div className="col-lg-5">
                  <div className="testimonial-left-image rmb-65">
                     <Image src={testimonialImg_1} alt="Testimonials" />
                  </div>
               </div>

               <div className="col-lg-7">
                  <Slider
                     slidesToShow={1}
                     slidesToScroll={1}
                     arrows={false}
                     autoplay={false}
                     fade={true}
                     autoplaySpeed={1000}
                     asNavFor={slider2Ref.current as Slider | undefined}
                     ref={(slider) => (slider1Ref.current = slider)}
                     className="testimonial-content-slider text-white">
                     {testimonial_data.filter((item) => item.page === "home_1").map((item) => (
                        <div key={item.id} className="testimonial-content-item">
                           <div className="icon"><i className="flaticon-quote"></i></div>
                           <div className="text">{item.desc}
                           </div>
                           <h4>{item.name}</h4>
                           <span className="designation">{item.designation}</span>
                        </div>
                     ))}
                  </Slider>
                  
                  <Slider
                     slidesToShow={3}
                     slidesToScroll={1}
                     asNavFor={slider1Ref.current as Slider | undefined}
                     ref={(slider) => (slider2Ref.current = slider)}
                     dots={false}
                     autoplay={false}
                     variableWidth={true}
                     autoplaySpeed={1000}
                     centerMode={true}
                     centerPadding="0"
                     focusOnSelect={true}
                     arrows={false} className="testimonial-thumb-slider">
                     <div className="testimonial-thumb-item">
                        <Image src={testimonialThumb_1} alt="Author" />
                     </div>
                     <div className="testimonial-thumb-item">
                        <Image src={testimonialThumb_2} alt="Author" />
                     </div>
                     <div className="testimonial-thumb-item">
                        <Image src={testimonialThumb_3} alt="Author" />
                     </div>
                     <div className="testimonial-thumb-item">
                        <Image src={testimonialThumb_2} alt="Author" />
                     </div>
                     <div className="testimonial-thumb-item">
                        <Image src={testimonialThumb_3} alt="Author" />
                     </div>
                  </Slider>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial;


