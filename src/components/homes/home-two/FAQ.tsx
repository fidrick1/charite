"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"
import FaqAnswerQuestion from "@/components/common/FaqAnswerQuestion";

import faqThumb from "@/assets/img/video/faq-video.jpg";

const FAQ = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="faq-area-two py-120">
            <div className="container">
               <div className="row gap-60">
                  <div className="col-lg-6">
                     <div className="faq-video-part rel">
                        <Image src={faqThumb} alt="Video" />
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play video-play--two" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                     </div>
                  </div>
                  <FaqAnswerQuestion />
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

export default FAQ
