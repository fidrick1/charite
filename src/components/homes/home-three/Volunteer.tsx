import volunteer_data from "@/data/volunteerData";
import Image from "next/image";
import Link from "next/link";

const Volunteer = ({ style }: any) => {

   const filteredVolunteers = volunteer_data
      .filter((item) => item.page === "home_3")
      .slice(0, style ? 4 : 8);

   return (
      <div className={`volunteer-area-three rel z-1 ${style ? "pt-120" : "pb-90"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-60">
                     <span className="section-title__subtitle mb-10">Our Volunteers</span>
                     {style ? <h3>Meet <span>With Volunteers</span></h3> : <h2>Our <span>Volunteers</span> Style 03</h2>}
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {filteredVolunteers.map((item) => (
                  <div key={item.id} className="col-xl-3 col-sm-6">
                     <div className="valunteer-item valunteer-item--three">
                        <div className="valunteer-item__img">
                           <Image src={item.thumb} alt="Valunteer" />
                        </div>
                        <div className="valunteer-item__designation">
                           <h4>{item.name}</h4>
                           <span>volunteer</span>
                           <div className="share__socials">
                              <Link href="#" className="facebook"><i className="flaticon-facebook"></i></Link>
                              <Link href="#" className="twitter"><i className="flaticon-twitter"></i></Link>
                              <Link href="#"><i className="flaticon-google-plus-logo"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Volunteer;
