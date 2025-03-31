import Link from "next/link"

const CtaArea = () => {
   return (
      <div className="cta-area overlay bgs-cover pt-110 rpt-120 pb-120" style={{ backgroundImage: `url(/assets/img/background/cta.jpg)` }}>
         <div className="container container-1170">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="section-title text-center text-white">
                     <h2>Welcome To Save Life And Make A Positive <span>Impact</span></h2>
                     <p>Only when the society comes together and contributeswe will be able to make an impact.</p>
                     <Link className="cr-btn mt-30" href="#">Donate Now</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CtaArea
