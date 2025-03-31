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

const FaqAnswerQuestion = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = faq_data.filter((item) => item.page === "home_2").map((faq, index) => ({
         ...faq,
         showAnswer: index === 1,
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
   <div className="col-lg-6">
      <div className="faq-content-part rmt-65">
         <div className="section-title mb-45 for-hide-summary">
            <span className="section-title__subtitle mb-10">Faq</span>
            <h2>How can we <span>help you?</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatem obcaecati consectetur adipisicing</p>
         </div>
         
         <div className="faq-accordion-two" id="faqAccordion">
            {faqData.map((item) => (
               <div key={item.id} className={`accordion-item ${item.showAnswer ? "active" : ""}`}>
                  <h5 className="accordion-header">
                     <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer(item.id)} type="button">
                        {item.question}
                     </button>
                  </h5>
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
  )
}

export default FaqAnswerQuestion
