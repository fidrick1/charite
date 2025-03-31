'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import eventDetailsThumb from "@/assets/img/events/event-details.jpg";
import EventDetailsForm from "@/components/forms/EventDetailsForm";
import EventDetailsSidebar from "./EventDetailsSidebar";

interface EventDetails {
   title: string;
   desc: Array<any>;
   thumb?: string | null;
   time: string;
   city: string;
}

interface EventDetailsAreaProps {
   single_event: EventDetails | null;
}

const EventDetailsArea = ({ single_event }: EventDetailsAreaProps) => {
   const [eventData, setEventData] = useState<EventDetails | null>(null);

   useEffect(() => {
      const documentId = localStorage.getItem("eventDocumentId");
      if (documentId) {
         fetchEventData(documentId);
      }
   }, []);

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const fetchEventData = async (documentId: string) => {
   try {
      const res = await fetch(`${API_URL}/api/events/${documentId}?populate=*`);
      const data = await res.json();
      if (data.data) {
         const fetchedEvent = {
            title: data.data.title,
            desc: data.data.desc || [], // Extracting the event description as an array
            thumb: data.data.thumb?.url ? `${API_URL}${data.data.thumb.url}` : null, // Fix the image URL
            time: data.data.time,
            city: data.data.city,
         };
         setEventData(fetchedEvent);
      }
   } catch (error) {
      console.error("Error fetching event data:", error);
   }
};


   // Fallback content data
   const content_data = {
      title_1: "Clean Water Event",
      desc_1: (
         <>
            Phasellus eros orci, ornare ut ipsum quis, fringilla facilisis dui. Nunc dui est, pellentesque a elementum quis, feugiat sed lectus. Cras ut enim nec quam rutrum mattis. Fusce ante enim, luctus eleifend felis ac, ullamcorper consequat eros.
         </>
      ),
   };

   const { title_1, desc_1 } = content_data;

   // Function to render event description dynamically
   const renderDescription = (desc: Array<any>) => {
      return desc.map((block, index) => {
         switch (block.type) {
            case 'heading':
               return (
                  <h1 key={index} style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                     {block.children[0]?.text}
                  </h1>
               );
            case 'paragraph':
               return (
                  <p key={index}>
                     {block.children[0]?.text}
                  </p>
               );
            default:
               return null;
         }
      });
   };

   return (
      <div className="event-details-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <div className="event-details-content mb-65">
                     <div className="details-image mb-30">
                        {eventData?.thumb ? (
                          <Image 
                          src={eventData?.thumb || "/default-thumbnail.jpg"} 
                          alt={eventData?.title || "Event"} 
                          width={800} 
                          height={500} 
                          objectFit="cover" 
                       />
                        ) : (
                           <Image src={eventDetailsThumb} alt="Fallback image" width={500} height={300} />
                        )}
                     </div>
                     <h3 className="title">{eventData?.title || title_1}</h3>
                     {renderDescription(eventData?.desc || [])}
                    
                  </div>
               </div>
               <EventDetailsSidebar />
            </div>
         </div>
      </div>
   );
};

export default EventDetailsArea;
