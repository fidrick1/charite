import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"

import ourCauseShapes from "@/assets/img/shapes/three-round-green.png"

const OurCause = () => {
   return (
      <div className="our-cause-area pt-120 pb-90 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-50">
                     <span className="section-title__subtitle mb-10">Our Causes</span>
                     <h3>Our <span>Latest Causes</span></h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing</p>
                  </div>
               </div>
            </div>
            
            <div className="row">
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
                              <div className={`progress-bar progress-bar-striped progress-bar-animated ${item.progress_bg}`} style={{ width: item.progress_width }}>
                              </div>
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
         <div className="our-cause-shapes">
            <Image className="one top_image_bounce" src={ourCauseShapes} alt="Shape" />
         </div>
      </div>
   )
}

export default OurCause
