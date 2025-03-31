import ContactForm from "@/components/forms/ContactForm"
import FaqContent from "@/components/common/FaqContent"

const ContactArea = () => {
   return (
      <div className="contact-page-area overflow-hidden py-120 rpt-100">
         <div className="container">
            <div className="row gap-60 align-items-center">
               <div className="col-lg-6">
                  <div className="faq-three-left-part mb-20 rel rmb-75">
                    <FaqContent/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="contact-page-form form-style-two py-110 rpy-85">
                     <div className="section-title mb-10">
                        <span className="section-title__subtitle mb-10">Need help</span>
                        <h3>Get In touch</h3>
                     </div>
                     <ContactForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
