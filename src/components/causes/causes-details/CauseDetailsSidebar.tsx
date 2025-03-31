"use client"
import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"

const tags: string[] = ["Charity", "African people", "Community", "Food", "Clean Water", "Education", "Health", "Volunteers", "Homeless child"]

const CauseDetailsSidebar = () => {
   return (
      <div className="main-sidebar rmt-75">
         <div className="widget widget_search">
            <h5 className="widget-title">Search Causes</h5>
            <form onClick={(e) => e.preventDefault()} className="search-form">
               <div className="form-group">
                  <input type="text" placeholder="Search key word" required />
               </div>
               <button className="submit-btn" type="submit"><i className="flaticon-magnifying-glass"></i></button>
            </form>
         </div>

         <div className="widget widget-recent-causes">
            <h5 className="widget-title">Recent Causes</h5>
            <ul>
               {cause_data.filter((items) => items.page === "inner_page_details").map(((item) =>
                  <li key={item.id}>
                     <div className="image">
                        <Image src={item.img} alt="Cause" />
                     </div>
                     <div className="content">
                        <h6><Link href="/cause-details">{item.title}</Link></h6>
                        <div className="cause-price">
                           <span><i className="flaticon-line-chart"></i> Raised : ${item.raised}</span>
                           <span><i className="flaticon-target"></i> Goal : ${item.goal}</span>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>

         <div className="widget widget_tag_cloud">
            <h5 className="widget-title">Tags</h5>
            <div className="tagcloud">
               {tags.map((tag, index) => <Link key={index} href="#">{tag}</Link>)}
            </div>
         </div>
         
         <div className="widget widget_cta">
            <div className="cta-widget-inner" style={{ backgroundImage: `url(assets/img/widgets/cta-bg.jpg)` }}>
               <h5>We have provided financial help to 5 million people</h5>
               <a className="cr-btn ml-5" href="donate.html">Donate Now</a>
            </div>
         </div>
      </div>
   )
}

export default CauseDetailsSidebar
