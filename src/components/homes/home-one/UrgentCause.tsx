import Image from "next/image";
import Link from "next/link";
import causeData from "@/data/causeData";

const cause_data = causeData.slice(0, 3)

import causeShape_1 from "@/assets/img/shapes/half-circle-with-dots.png";
import causeShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import causeShape_3 from "@/assets/img/shapes/circle-with-line-green.png";

const UrgentCause = () => {
   return (
      <div className="urgent-cause-area overlay bgs-cover pt-120 pb-90 rel z-1" style={{ backgroundImage: `url(/assets/img/causes/urgent-causes.jpg)` }}>
         <div className="container container-1370">
            <div className="row gap-40">
               <div className="col-xl-3 col-md-6">
                  <div className="urgent-cause-content mb-30 rmb-65">
                     <div className="section-title mb-30">
                        <span className="section-title__subtitle mb-30">Urgent cause</span>
                        <h3>We help more than <span>9k children</span> every year</h3>
                     </div>
                     <p>BigHearts is the largest global crowdfunding community connecting nonprofits, donors, and companies in nearly every country. We help nonprofits from</p>
                     <Link className="cr-btn ml-5 mt-35" href="#">View All causes</Link>
                  </div>
               </div>

               {cause_data.filter((item) => item.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-3 col-md-6">
                     <div className="cause-item">
                        <div className="image">
                           <Image src={item.img} alt="Cause" />
                        </div>
                        <div className="content">
                           <h5><Link href="/causes">{item.title}</Link></h5>
                           <p>{item.desc}</p>
                           <div className="cause-price">
                              <span>Raised : ${item.raised}</span>
                              <span>Goal : ${item.goal}</span>
                           </div>
                           <div className="progress">
                              <div className={`progress-bar progress-bar-striped progress-bar-animated ${item.progress_bg}`} style={{ width: item.progress_width }}></div>
                           </div>
                           <div className="cause-btn">
                              <Link className={`cr-btn ${item.btn_bg}`} href="#">Donation now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         
         <div className="urgent-cause-shapes">
            <Image className="one top_image_bounce" src={causeShape_1} alt="Shape" />
            <Image className="two left_image_bounce" src={causeShape_2} alt="Shape" />
            <Image className="three right_image_bounce" src={causeShape_3} alt="Shape" />
         </div>
      </div>
   )
}

export default UrgentCause
