import BecomeVolunteerForm from "@/components/forms/BecomeVolunteerForm"
import Image from "next/image";

import volunteerImg from "@/assets/img/valunteer/volunteer-left.jpg";
import volunteerCircle from "@/assets/img/valunteer/volunteer-left-circle.jpg";
import volunteerShape from "@/assets/img/shapes/three-round-big-green.png";

const BecomeVolunteer = () => {
   return (
      <div className="become-volunteer-two bgc-black py-120 rel z-1">
         <div className="container">
            <div className="row gap-60 align-items-center">
               <div className="col-lg-6">
                  <div className="volunteer-left-image rel rmb-65">
                     <Image src={volunteerImg} alt="valunteer" />
                     <Image className="circle" src={volunteerCircle} alt="valunteer" />
                     <Image className="shape top_image_bounce" src={volunteerShape} alt="Shape" />
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="volunteer-content form-style-two text-white">
                     <div className="section-title mb-40">
                        <span className="section-title__subtitle mb-10">Be Come Volunteer</span>
                        <h3>Become a <span>volunteer</span></h3>
                     </div>
                     <BecomeVolunteerForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BecomeVolunteer
