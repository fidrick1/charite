"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"
import BecomeVolunteerForm from "@/components/forms/BecomeVolunteerForm"

import volunteerImg_1 from "@/assets/img/valunteer/become-volunteer-video.jpg"
import volunteerImg_2 from "@/assets/img/valunteer/become-volunteer-small.jpg"
import volunteerImg_3 from "@/assets/img/valunteer/valunteer-left.png"

const BecomeVolunteer = ({ style }: any) => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="become-volunteer-three pt-90 pb-120 rel z-1">
            <div className="container">
               <div className="row gap-80 align-items-center justify-content-between">
                  <div className="col-lg-6">
                     {style ? (<div className="volunteer-left-video rel rmb-75">
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play video-play--three" data-effect="mfp-zoom-in"><i className="flaticon-play-1"></i></a>
                        <Image src={volunteerImg_1} alt="valunteer" />
                        <Image className="small-image" src={volunteerImg_2} alt="valunteer" />
                     </div>) : (<div className="volunteer-image rmb-65">
                        <Image src={volunteerImg_3} alt="valunteer" />
                     </div>)}
                  </div>

                  <div className="col-lg-6">
                     <div className="volunteer-content form-style-two">
                        <div className="section-title mb-40">
                           <span className="section-title__subtitle mb-10">BeCome Volunteer</span>
                           <h3>Become a <span>volunteer</span></h3>
                        </div>
                        <BecomeVolunteerForm />
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

export default BecomeVolunteer
