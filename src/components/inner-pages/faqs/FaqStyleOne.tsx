import CommonFaq from "./CommonFaq"

const FaqStyleOne = () => {
   return (
      <div className="faq-page-area pb-100 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-55">
                     <span className="section-title__subtitle mb-10">Popular Question</span>
                     <h2>Popular <span>Question</span> About us</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati
                        consectetur adipisicing</p>
                  </div>
               </div>
            </div>
            
            <div className="row">
               <div className="col-lg-6">
                  <CommonFaq style={true}/>
               </div>
               <div className="col-lg-6">
                  <CommonFaq style={false} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default FaqStyleOne
