import CauseDetailsSidebar from "@/components/causes/causes-details/CauseDetailsSidebar"
import CauseDetailsForm from "@/components/forms/CauseDetailsForm"

const DonateArea = () => {
   return (
      <div className="donation-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <CauseDetailsForm />
               </div>
               <div className="col-lg-4">
                  <CauseDetailsSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default DonateArea
