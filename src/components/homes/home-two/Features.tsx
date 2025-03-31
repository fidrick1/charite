import features_data from "@/data/featuresData"
import Link from "next/link"

const Features = ({ style }: any) => {
   return (
      <div className={`${style ? "features-area-four bgs-cover overlay pt-120 pb-90" : "features-area-two rel z-2"}`}>
         <div className="container">
            <div className="row no-gutter justify-content-center">
               {features_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`feature-item--two ${item.item_bg}`}>
                        <div className="feature-item__icon"><i className={item.icon_name}></i></div>
                        <h4><Link href={`/causes-details/${item.id}`}>{item.title}</Link></h4>
                        <p>{item.desc}</p>
                        <Link className="feature-item__btn" href="#">join us now</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Features
