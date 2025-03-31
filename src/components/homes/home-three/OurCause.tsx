"use client"
import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"
import LinearProgress from "@/hooks/LinearProgress";

import causeShape_1 from "@/assets/img/valunteer/valunteer-bg.png"
import causeShape_2 from "@/assets/img/valunteer/valunteer-bg2.png"
import causeShape_3 from "@/assets/img/shapes/three-round-green.png"

const OurCause = () => {
   return (
      <div className="our-causes-three bgc-black pt-120 pb-90 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="section-title text-center text-white mb-55">
                     <span className="section-title__subtitle mb-10">Our Causes</span>
                     <h2>Our Latest <span>Causes</span></h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {cause_data.filter((item) => item.page === "home_3").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`cause-three-item ${item.item_bg}`}>
                        <div className="image">
                           <Image src={item.img} alt="Cause" />
                           <LinearProgress finish={item.percentage} />
                        </div>
                        <div className="content">
                           <h4><Link href="/causes">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <div className="cause-price">
                              <span><i className="flaticon-line-chart"></i> Raised : ${item.raised}</span>
                              <span><i className="flaticon-target"></i> Goal : ${item.goal}</span>
                           </div>
                           <div className="cause-btn">
                              <Link className="cr-btn" href="#">Donation now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="cta-area-shapes">
            <Image className="one" src={causeShape_1} alt="Shape" />
            <Image className="two" src={causeShape_2} alt="Shape" />
         </div>
         <div className="our-cause-shapes">
            <Image className="one top_image_bounce" src={causeShape_3} alt="Shape" />
         </div>
      </div>
   )
}

export default OurCause;
