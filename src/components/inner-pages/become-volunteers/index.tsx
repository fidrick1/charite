import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import Features from "@/components/homes/home-two/Features"
import BecomeVolunteer from "@/components/homes/home-three/BecomeVolunteer"
import VolunteerVideo from "./VolunteerVideo"
import CtaArea from "@/components/homes/home-two/CtaArea"
import Testimonial from "@/components/homes/home-two/Testimonial"

const BecomeVolunteers = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Become Volunteers" page_list="Become Volunteers" style={false} />
            <Features style={true} />
            <BecomeVolunteer style={false} />
            <VolunteerVideo style={false} />
            <CtaArea />
            <Testimonial style={true} />
            <Brand style={false} />
         </main>
         <FooterOne />
      </>
   )
}

export default BecomeVolunteers
