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

const CommonFaq = ({ style }: any) => {

   const [faqData, setFaqData] = useState<DataType[]>([]);
   const [faqData2, setFaqData2] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = faq_data.filter((item) => item.page === "inner_page").slice(0, 4).map((faq, index) => ({
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

   useEffect(() => {
      const initialFaqData2: DataType[] = faq_data.filter((item) => item.page === "inner_page").slice(4, 8).map((faq, index) => ({
         ...faq,
         showAnswer: index === 3,
      }));
      setFaqData2(initialFaqData2);
   }, []);

   const toggleAnswer2 = (id: number) => {
      setFaqData2((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq) => ({
            ...faq,
            showAnswer: faq.id === id ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <div className="faq-accordion-two" id="faqAccordion">
         {style ? (faqData.map((item) => (
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
         ))) : 
         
         (faqData2.map((item) => (
            <div key={item.id} className={`accordion-item ${item.showAnswer ? "active" : ""}`}>
               <h5 className="accordion-header">
                  <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer2(item.id)} type="button">
                     {item.question}
                  </button>
               </h5>
               {item.showAnswer && (
                  <div className="accordion-collapse collapse show" id={`collapse${item.id}`}>
                     <div className="accordion-body">{item.answer}</div>
                  </div>
               )}
            </div>
         )))}
      </div>
   )
}

export default CommonFaq
