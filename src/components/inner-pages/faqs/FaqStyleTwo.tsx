"use client"
import faq_data from "@/data/faqData";
import { useEffect, useState } from "react";

interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const FaqStyleTwo = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = faq_data.filter((item) => item.page === "inner_style2").map((faq, index) => ({
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
      <div className="faq-page-area-two inner-faq py-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-8">
                  <div className="section-title text-center mb-45">
                     <span className="section-title__subtitle mb-10">Popular Question</span>
                     <h2>Popular <span>Question</span> About us</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing</p>
                  </div>
                  
                  <div className="faq-accordion" id="faqAccordionFour">
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
   )
}

export default FaqStyleTwo;
