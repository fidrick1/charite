import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import EventDetailsArea from "./EventDetailsArea"

const EventDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Breadcrumb page_title="Our Events Slider" page_list="Event" />
            
            <EventDetailsArea />
            <Brand style={true} />
         </main>
         <FooterOne />
      </>
   )
}

export default EventDetails;
