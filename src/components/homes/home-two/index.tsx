import HeaderOne from "@/layout/headers/HeaderOne"
import HeroArea from "./HeroArea"
import Features from "./Features"
import UrgentCause from "./UrgentCause"
import About from "./About"
import OurCause from "./OurCause"
import Counter from "./Counter"
import Event from "./Event"
import BecomeVolunteer from "./BecomeVolunteer"
import Volunteer from "./Volunteer"
import Testimonial from "./Testimonial"
import CtaArea from "./CtaArea"
import FAQ from "./FAQ"
import Blog from "../home-one/Blog"
import Brand from "@/components/common/Brand"
import FooterTwo from "@/layout/footers/FooterTwo"

const HomeTwo = () => {
  return (
    <>
      <HeaderOne style_1={true} style_2={false} />
      <main>
        <HeroArea />
        <Features style={false} />
        <UrgentCause />
        <About />
        <OurCause />
        <Counter />
        <Event />
        <BecomeVolunteer/>
        <Volunteer style={true} />
        <Testimonial style={false} />
        <CtaArea />
        <FAQ />
        <Blog style={true} />
        <Brand style={false} />
      </main>
      <FooterTwo/>
    </>
  )
}

export default HomeTwo
