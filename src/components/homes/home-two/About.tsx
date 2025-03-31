"use client"
import Image, { StaticImageData } from "next/image"
import Slider from 'react-slick'

import aboutImg_1 from "@/assets/img/about/about-left1.jpg";
import aboutImg_2 from "@/assets/img/about/about-left2.jpg";
import aboutImg_3 from "@/assets/img/about/about-left3.jpg";
import aboutRightImg from "@/assets/img/about/about-right.jpg";

const about_img_data: StaticImageData[] = [aboutImg_1, aboutImg_2, aboutImg_3, aboutImg_2];

interface ContentData {
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
   list: string[];
}

const about_content: ContentData = {
   sub_title: "About us",
   title: (<>Welcome To Our Charity <span>Organization</span></>),
   desc: (<>There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou ndomised words even slightly believable Making this the first true.</>),
   list: ["Consectetur adipiscing elitsed", "Nostra dapibus varius et semper", "Nullam venenatis ultricies", "Environment For Our Next", "Consectetur adipiscing elitsed", "Maximus a augue Nullam ante"],
}

const { sub_title, title, desc, list } = about_content;

const About = () => {

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 575,
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
      <div className="about-us-two">
         <div className="container">
            <div className="row gap-100 align-items-center">
               <div className="col-xl-6">
                  <div className="about-us-content-part mb-50">
                     <div className="section-title mb-50">
                        <span className="section-title__subtitle mb-10">{sub_title}</span>
                        <h2>{title}</h2>
                     </div>
                     <p>{desc}</p>
                     <hr className="mt-40" />

                     <Slider {...settings} className="about-middle-images row">
                        {about_img_data.map((img, i) => (
                           <div key={i} className="col-lg-4">
                              <div className="about-middle-images-item">
                                 <Image src={img} alt="About" />
                              </div>
                           </div>
                        ))}
                     </Slider>
                     <hr />

                     <ul className="list-style-one pt-15">
                        {list.map((li, index) => (
                           <li key={index}>{li}</li>
                        ))}
                     </ul>
                  </div>
               </div>
               
               <div className="col-xl-6">
                  <div className="about-us-image-part mb-65 rel">
                     <Image src={aboutRightImg} alt="About" />
                     <div className="experiences-year" style={{ backgroundImage: `url(/assets/img/about/experiences.jpg)` }}>
                        <span className="experiences-year__number">25</span>
                        <span className="experiences-year__text">Years Experiences</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
