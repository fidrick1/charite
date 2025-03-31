import Image from "next/image"
import BecomeVolunteerForm from "../../forms/BecomeVolunteerForm"

import volunteerImg_1 from "@/assets/img/valunteer/valunteer-left.png"
import volunteerImg_2 from "@/assets/img/valunteer/valunteer-bg.png"

const BecomeVolunteer = () => {
  return (
   <div className="become-volunteer-area py-120 overflow-hidden rel z-1">
       <div className="container">
           <div className="row align-items-center">
               <div className="col-lg-6">
                   <div className="volunteer-image rmb-65">
                       <Image src={volunteerImg_1} alt="valunteer"/>
                   </div>
               </div>
               <div className="col-lg-6">
                   <div className="volunteer-content form-style-one text-white">
                       <div className="section-title mb-45">
                           <span className="section-title__subtitle mb-10">Our Volunteer</span>
                           <h3>Become a <span>volunteer</span></h3>
                       </div>
                       <BecomeVolunteerForm/>
                   </div>
               </div>
           </div>
       </div>
       <div className="become-volunteer-shapes">
           <Image className="one" src={volunteerImg_2} alt="Shape"/>
           <Image className="two" src={volunteerImg_2} alt="Shape"/>
       </div>
   </div>
  )
}

export default BecomeVolunteer
