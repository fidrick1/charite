import FaqAnswerQuestion from "@/components/common/FaqAnswerQuestion"
import FaqContent from "@/components/common/FaqContent"

const FAQ = ({style}:any) => {
   return (
      <div className={`faq-area-three ${style?"pb-100":"py-100"} `}>
         <div className="container">
            <div className="row gap-60 align-items-center">
               <div className="col-lg-6">
                  <div className="faq-three-left-part mb-20 rel">
                     <FaqContent />
                  </div>
               </div>
               <FaqAnswerQuestion />
            </div>
         </div>
      </div>
   )
}

export default FAQ
