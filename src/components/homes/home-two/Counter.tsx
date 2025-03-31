import Link from "next/link"
import Count from "@/components/common/Count"
import counter_data from "@/data/counterData"

const Counter = () => {
   return (
      <div className="counter-area pt-110 rpt-115 pb-90 bgs-cover rel z-1" style={{ backgroundImage: `url(/assets/img/background/counter-bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-end">
               <div className="col-xl-8 col-lg-10">
                  <div className="counter-section-content">
                     <div className="section-title">
                        <h2>Making Someone Else’s Dreams A Reality Is Something That&apos;s Value Is Innumerable</h2>
                     </div>
                     <i>Helped Fund <span>24,537</span> Projects in 24 Countries,<br /> Benefiting Over 8.2 Million
                        People</i>
                     <div className="counter-btns pt-5 mb-100">
                        <Link className="cr-btn" href="#">See All Causes</Link>
                        <Link className="cr-btn btn--yellow" href="#">Contac us</Link>
                     </div>
                     
                     <div className="row">
                        {counter_data.filter((items) => items.page === "home_2").map((item) => (
                           <div key={item.id} className="col-md-4 col-sm-6">
                              <div className="counter-item counter-text-wrap">
                                 <div className={`counter-item__icon ${item.icon_bg}`}><i
                                    className={item.icon}></i></div>
                                 <div className="counter-item__content">
                                    <span className="count-text" data-speed="3000" data-stop="876000"><Count number={item.counter_number} /></span>
                                    <h5 className="counter-title">{item.title}</h5>
                                 </div>
                              </div>
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

export default Counter
