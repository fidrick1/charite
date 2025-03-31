"use client"
import React, { useRef, useEffect } from "react";
import Slider from 'react-slick';
import testimonial_data from "@/data/testimonialData";
import Image from "next/image";

import quoteIcon from "@/assets/img/testimonials/quote-icon.png";
import testimonialImg from "@/assets/img/testimonials/testimonial-two-left.png";
import testimonialCircle from "@/assets/img/testimonials/testimonial-two-bg.png";

import testimonialThumb_1 from "@/assets/img/testimonials/testi-thumb1.jpg";
import testimonialThumb_2 from "@/assets/img/testimonials/testi-thumb2.jpg";
import testimonialThumb_3 from "@/assets/img/testimonials/testi-thumb3.jpg";

const Testimonial = ({ style }: any) => {

   const slider1Ref = useRef<Slider | null>(null);
   const slider2Ref = useRef<Slider | null>(null);

   useEffect(() => {
      if (slider1Ref.current && slider2Ref.current) {
         slider1Ref.current.slickGoTo(2);
      }
   }, []);

   return (
      <div className={`testimonials-area-two ${style ? "py-120" : "pb-120"}`}>
         <div className="container">
            <div className="row gap-100 align-items-center">
               <div className="col-lg-5">
                  <div className="testimonial-two-image rel z-1 rmb-65">
                     <Image src={testimonialImg} alt="Testimonials" />
                     <Image className="circle-shape top_image_bounce" src={testimonialCircle} alt="World" />
                  </div>
               </div>
               
               <div className="col-lg-7">
                  <div className="testimonial-style-two rel">
                     <Slider
                        slidesToShow={1}
                        slidesToScroll={1}
                        arrows={false}
                        autoplay={false}
                        fade={true}
                        autoplaySpeed={1000}
                        asNavFor={slider2Ref.current as Slider | undefined}
                        ref={(slider) => (slider1Ref.current = slider)}
                        className="testimonial-content-slider"
                     >
                        {testimonial_data
                           .filter((item) => item.page === "home_2")
                           .map((item) => (
                              <div key={item.id} className="testimonial-content-item">
                                 <div className="icon"><Image src={quoteIcon} alt="Quote" /></div>
                                 <div className="text">{item.desc}</div>
                                 <div className="ratting">
                                    {item.rating?.map((rating, i) => (<i key={i} className={rating}></i>))}
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
                        vertical= {true}
                        verticalSwiping= {true}
                        variableWidth={true}
                        autoplaySpeed={1000}
                        centerMode={false}
                        focusOnSelect={true}
                        arrows={false}
                        className="testimonial-thumb-two"
                     >
                        <div className="testimonial-thumb-item">
                           <Image src={testimonialThumb_1} alt="Author" />
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
      </div>
   );
};

export default Testimonial

