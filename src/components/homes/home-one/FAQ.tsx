"use client"
import Image from "next/image"
import { useEffect, useState } from 'react'
import faq_data from "@/data/faqData";

import aboutImg_1 from "@/assets/img/about/about1.jpg";
import aboutImg_2 from "@/assets/img/about/about2.jpg";
import aboutImg_3 from "@/assets/img/about/about3.jpg";
import aboutShape_1 from "@/assets/img/shapes/three-round-green.png";
import aboutShape_2 from "@/assets/img/shapes/three-round-red.png";

interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const FAQ = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = faq_data.filter((item) => item.page === "home_1").slice(0,3).map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (id: number) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq) => ({
            ...faq,
            showAnswer: faq.id === id ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <div className="faq-area faq-one py-120">
         <div className="container ">
            <div className="row gap-100">
               <div className="col-lg-6">
                  <div className="faq-image-part">
                     <div className="row">
                        <div className="col-6">
                           <div className="image">
                              <Image src={aboutImg_1} alt="About" />
                              <Image className="shape one top_image_bounce" src={aboutShape_1} alt="Shape" />
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="About" />
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="image">
                              <Image src={aboutImg_2} alt="About" />
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="About" />
                              <Image className="shape two right_image_bounce" src={aboutShape_2} alt="Shape" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="faq-content-part rmt-65 rel z-2">
                        <div className="section-title mb-45 for-hide-summary">
                            <span className="section-title__subtitle mb-10">Faq</span>
                            <h2>How can we <span>help you?</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatem obcaecati consectetur adipisicing</p>
                        </div>
                     <div className="faq-accordion" id="faqAccordion">
                        {faqData.map((item) => (
                           <div key={item.id} className={`accordion-item ${item.showAnswer ? "active" : ""}`}>
                              <h4 className="accordion-header">
                                 <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer(item.id)} type="button">
                                    {item.question}
                                 </button>
                              </h4>
                              {item.showAnswer && (
                                 <div className="accordion-collapse collapse show" id={`collapse${item.id}`}>
                                    <div className="accordion-body">{item.answer}</div>
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ
