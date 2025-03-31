import Image from "next/image"
import Link from "next/link";
import CauseDetailsForm from "@/components/forms/CauseDetailsForm";
import CauseDetailsSidebar from "./CauseDetailsSidebar";

import causeDetailsThumb from "@/assets/img/causes/cause-details.jpg"
import causeDetailsMiddleThumb_1 from "@/assets/img/causes/cause-middle1.jpg"
import causeDetailsMiddleThumb_2 from "@/assets/img/causes/cause-middle2.jpg"

interface ContentData {
   title_1: string;
   title_2: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   feature_data: {
      icon: string;
      title: string;
      desc: string;
      item_bg?: string;
   }[],
}

const details_content: ContentData = {
   title_1: "Child Education Help",
   title_2: "Why Donate for Child Education",
   desc_1: (<>Integer pulvinar elementum iaculis. Phasellus non turpis in nisi semper finibus in sit amet ipsum. Integer ac orci mattis thinke efficitur enim vel, ultrices tortor. Donec tempor commodo enim ac tincidunt. Ut auctor eros nec eserdum, vel viverra elitions faucibus. Nam volutpat pharetra metus a varius. Etiam sit amet orci non</>),
   desc_2: (<>Mauris nec orci dui. Integer id arcu commodo, venenatis nisl ut, ultricies dolor. Phasellus finibus nulla elit, id tincidunt erat varius eget. Proin lobortis urna nec lectus tempor sollicitudin. Maecenas lorem est, fringilla in faucibus quis, efficitur ac ante. Phasellus arcu sapien, egestas quis maximus quis, lobortis sollicitudin erat. vestibulum nisi. In convallis justo et ipsum varius, at euismod elit vulputate. Nunc euismod a nunc</>),
   desc_3: (<>laoreet magna. Phasellus rhoncus vel mauris vitae tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ultricies eleifend consectetur. In accumsan aliquam velit in convallis. Nulla consequat enim urna, vel tempor diam laoreet nec.</>),
   feature_data: [
      {
         icon: "flaticon-help",
         title: "Donate and Help",
         desc: "Fusce vulputate pureleestibulum purus qlerisque umollis",
      },
      {
         icon: "flaticon-heart",
         title: "With Big Strength",
         desc: "Fusce vulputate pureleestibulum purus qlerisque umollis",
         item_bg: "feature-item__icon--green",
      },
      {
         icon: "flaticon-donation",
         title: "Full Inspiration",
         desc: "Fusce vulputate pureleestibulum purus qlerisque umollis",
         item_bg: "feature-item__icon--yellow"
      },
   ]
}

const { title_1, title_2, desc_1, desc_2, desc_3, feature_data } = details_content;

const CauseDetailsArea = ({ single_cause }: any) => {
   return (
      <div className="cause-details-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <div className="cause-details-content">
                     <div className="details-image mb-30">
                        {single_cause?.img ? <Image src={single_cause.img} alt="image" /> : <Image src={causeDetailsThumb} alt="image" />}
                     </div>
                     <h3 className="title">{single_cause?.title ? single_cause.title : title_1}</h3>
                     <p>{desc_1}</p>
                     <div className="cause-price mt-30">
                        <span>Raised : $87,689</span>
                        <span>Goal : $87,689</span>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "44%" }}></div>
                     </div>
                     
                     <div className="row pt-30 pb-5">
                        <div className="col-sm-6">
                           <div className="image mb-30">
                              <Image src={causeDetailsMiddleThumb_1} alt="Cause" />
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="image mb-30">
                              <Image src={causeDetailsMiddleThumb_2} alt="Cause" />
                           </div>
                        </div>
                     </div>

                     <p>{desc_2}</p>
                     <p>{desc_3}</p>
                     <br />
                     <h4>{title_2}</h4>

                     <div className="row pt-15 pb-30">
                        {feature_data.map((item, index) => (
                           <div key={index} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                              <div className="feature-item feature-item--bordered">
                                 <div className={`feature-item__icon ${item.item_bg}`}><i
                                    className={item.icon}></i></div>
                                 <h5><Link href="/cause-details">{item.title}</Link></h5>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
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

export default CauseDetailsArea
