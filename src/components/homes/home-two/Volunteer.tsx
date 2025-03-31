"use client";  // This tells Next.js to render this as a Client Component

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// Define types
interface Volunteer {
   id: string;
   name: string;
   role: string;
   imageUrl: string;
}

interface Member {
   id: string;
   name: string;
   role: string;
   profile_picture: {
      formats: {
         thumbnail: {
            url: string;
         };
      };
   };
}

const Volunteer = ({ style }: any) => {
   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

   const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;


   useEffect(() => {
      const fetchVolunteers = async () => {
         try {
            const response = await axios.get(`${API_URL}/api/teams?populate=profile_picture`);
            const data = response.data.data.map((member: Member) => ({
               id: member.id,
               name: member.name,
               role: member.role,
               imageUrl: member.profile_picture 
                  ? `${API_URL}${member.profile_picture.formats.thumbnail.url}` 
                  : "/default-profile.jpg",
            }));
            setVolunteers(data);
         } catch (error) {
            console.error("Error fetching volunteers:", error);
         }
      };

      fetchVolunteers();
   }, []);

   return (
      <div className={`volunteer-area-two pb-90 rel z-1 ${style ? "pt-120" : ""}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-60">
                     <span className="section-title__subtitle mb-10">Our Volunteers</span>
                     {style ? <h3>Meet <span>With Volunteers</span></h3> : <h2>Our <span>Volunteers</span> At Hope Foundation </h2>}
                     <p>Meet our extraordinary volunteers – a dedicated force united by passion, purpose, and a commitment to making a difference.</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="col-xl-3 col-sm-6">
                     <div className="valunteer-two-item">
                        <div className="valunteer-two-item__img">
                           <Image 
                              src={volunteer.imageUrl} 
                              alt={volunteer.name} 
                              width={139} 
                              height={156} 
                              priority 
                           />
                        </div>
                        <div className="valunteer-two-item__des">
                           <h5>{volunteer.name}</h5>
                           <span>{volunteer.role}</span>
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
