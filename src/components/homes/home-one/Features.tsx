"use client"
import Link from "next/link"
import Slider from 'react-slick'
import Image from "next/image";
import features_data from "@/data/featuresData";

import featureShape from "@/assets/img/shapes/three-round-green.png";

const CustomPrevArrow = (props: any) => {
   const { onClick } = props;
   return (
      <div className="slider-arrow text-lg-end mb-20">
         <button onClick={onClick} type="button" className="feature-prev"><i className="flaticon-left-chevron"></i></button>
      </div>
   );
};

const CustomNextArrow = (props: any) => {
   const { onClick } = props;
   return (
      <div className="slider-arrow text-lg-end mb-20">
         <button onClick={onClick} type="button" className="feature-next"><i className="flaticon-next"></i></button>
      </div>
   );
};

const Features = () => {

   const single_slider_settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      dots: true,
      autoplaySpeed: 5000,
   }

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      fade: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      speed: 1000,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               arrows: true,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ],
   }

   return (
      <div className="features-area rel bgs-cover z-1" style={{ backgroundImage: `url(/assets/img/background/feature-bg.jpg)`, position: "relative" }}>
         <div className="container">
            <div className="row">
               <div className="col-xl-3">
                  <div className="feature-left-wrap bgs-cover text-white overlay" style={{ backgroundImage: `url(/assets/img/background/feature-slider-bg.jpg)` }}>
                     <Slider {...single_slider_settings} className="feature-left-slider">
                        {features_data.filter((item) => item.page === "single_features").map((item) => (
                           <div key={item.id} className="feature-single-slide">
                              <div className="section-title mb-40">
                                 <h3>{item.title}</h3>
                                 <p>{item.desc}</p>
                              </div>
                              <Link className={`cr-btn ${item.btn_bg}`} href="#">Donation now</Link>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>

               <div className="col-xl-9">
                  <div className="feature-content">
                     <div className="row justify-content-between">
                        <div className="col-lg-8">
                           <div className="section-title mb-35">
                              <span className="section-title__subtitle mb-10">Our Features</span>
                              <h2>How Could <span>You Help?</span></h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing</p>
                           </div>
                        </div>
                     </div>
                     
                     <Slider {...settings} className="feature-right-slider row mt-20">
                        {features_data.filter((item) => item.page === "home_1").map((item) => (
                           <div key={item.id} className="col-lg-4">
                              <div className="feature-item">
                                 <div className={`feature-item__icon ${item.icon_bg}`}><i className={item.icon_name}></i></div>
                                 <h4><Link href="/cause-details">{item.title}</Link></h4>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
         <div className="feature-shapes">
            <Image className="one right_image_bounce" src={featureShape} alt="Shape" />
         </div>
      </div>
   )
}

export default Features
