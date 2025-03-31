"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"
import Link from "next/link";

import charityImg from "@/assets/img/video/charity-video.jpg";

const Charity = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="charity-video rel pt-115 rpt-120 pb-120">
            <div className="charity-area-bg" style={{ backgroundImage: `url(/assets/img/background/charity-video-bg.jpg)` }}></div>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-12">
                     <div className="section-title text-center mb-50">
                        <h2>We are a non-profit charity and NGO organization that Provide help to homeless people!</h2>
                     </div>
                  </div>
                  
                  <div className="col-lg-8">
                     <div className="charity-video-part overlay mb-25">
                        <Image src={charityImg} alt="Video" />
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play video-play--two" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                     </div>
                     <h4>Water For All Children</h4>
                     <div className="charity-progressbar pt-10">
                        <div className="progress-bar-wrap">
                           <div className="cause-price">
                              <span>Raised : $87,689</span>
                              <span>Goal : $87,689</span>
                           </div>
                           <div className="progress">
                              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                           </div>
                        </div>
                        <Link className="cr-btn" href="#">Donation now</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default Charity
