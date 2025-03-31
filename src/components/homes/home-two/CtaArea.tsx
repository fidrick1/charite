import Image from "next/image"
import Link from "next/link";

import ctaShape_1 from "@/assets/img/valunteer/valunteer-bg.png";
import ctaShape_2 from "@/assets/img/valunteer/valunteer-bg2.png";

const CtaArea = () => {
   return (
      <div className="cta-area bgc-black pt-110 rpt-120 pb-120 rel z-1">
         <div className="container container-1170">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="section-title text-center text-white">
                     <h2>Welcome To Save Life And Make A Positive <span>Impact</span></h2>
                     <p>Only when the society comes together and contributeswe will be able to make an impact.</p>
                     <Link className="cr-btn mt-35" href="#">Donate Now</Link>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="cta-area-shapes">
            <Image className="one" src={ctaShape_1} alt="Shape" />
            <Image className="two" src={ctaShape_2} alt="Shape" />
         </div>
      </div>
   )
}

export default CtaArea
