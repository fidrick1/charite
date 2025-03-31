import HeaderOne from "@/layout/headers/HeaderOne";
import HeroArea from "./HeroArea";
import Brand from "@/components/common/Brand";
import Charity from "./Charity";
import About from "./About";
import OurCause from "./OurCause";
import Volunteer from "./Volunteer";
import BecomeVolunteer from "./BecomeVolunteer";
import CtaArea from "./CtaArea";
import Event from "./Event";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Blog from "./Blog";
import FooterThree from "@/layout/footers/FooterThree";

const HomeThree = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={true} />
      <main>
        <HeroArea />
        <Brand style={true} />
        <Charity />
        <About />
        <OurCause />
        <Volunteer style={true} />
        <BecomeVolunteer style={true} />
        <CtaArea />
        <Event />
        <FAQ style={false} />
        <Testimonial />
        <Features />
        <Blog />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeThree;
