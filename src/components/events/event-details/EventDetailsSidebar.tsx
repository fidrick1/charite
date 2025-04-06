import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import ppcomingEventImg_1 from "@/assets/img/default/right-arrow.png";
import ppcomingEventImg_2 from "@/assets/img/default/right-arrow.png";

// Type for the main event data
interface EventData {
  time: string;
  city: string;
  documentId: string;
}

// Type for upcoming events
interface UpcomingEvent {
  documentId: string;
  title: string;
  time: string;
  thumb?: { url: string; alternativeText?: string } | null;
}


const EventDetailsSidebar = () => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);

  // Get the current event documentId from local storage
  const eventDocumentId =
    typeof window !== "undefined" ? localStorage.getItem("eventDocumentId") : null;

    const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  // Fetch main event data based on documentId
  useEffect(() => {
    if (eventDocumentId) {
      axios
        .get(`${API_URL}/api/events/${eventDocumentId}?populate=*`)
        .then((response) => {
          const data = response.data.data;
          setEventData({
            time: data.time,
            city: data.city,
            documentId: data.documentId,
          });
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
        });
    }
  }, [eventDocumentId]);

  // Fetch all events and filter out the current event for upcoming events
  useEffect(() => {
    axios
      .get(`${API_URL}/api/events?populate=*`)
      .then((response) => {
        let events = response.data.data;
        // Remove the current event from the list if documentId exists
        if (eventDocumentId) {
          events = events.filter((event: any) => event.documentId !== eventDocumentId);
        }
        // Only take 2 events
        events = events.slice(0, 2);
        // Map to UpcomingEvent type
        const mappedEvents: UpcomingEvent[] = events.map((event: any) => ({
          documentId: event.documentId,
          title: event.title,
          time: event.time,
          thumb: event.thumb || null,
        }));
        setUpcomingEvents(mappedEvents);
      })
      .catch((error) => {
        console.error("Error fetching upcoming events:", error);
      });
  }, [eventDocumentId]);

  return (
    <div className="col-lg-4">
      <div className="main-sidebar event-sidebar rmt-75">
        <div className="widget widget-event-info">
          <h5 className="widget-title">Event Info</h5>
          <ul>
            <li>
              <div className="icon">
                <i className="fa fa-calendar-alt"></i>
              </div>
              <div className="content">
                <h6>Event Date & Time</h6>
                <span>
                  {eventData
                    ? new Date(eventData.time).toLocaleString()
                    : "Loading..."}
                </span>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="content">
                <h6>Event Venue</h6>
                <span>{eventData ? eventData.city : "Loading..."}</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa fa-phone-alt"></i>
              </div>
              <div className="content">
                <h6>Contact Number</h6>
                <span>(767) 555-0120 , (767) 555 - 010</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget widget-upcoming-event">
          <h5 className="widget-title">Upcoming Event</h5>
          <ul>
          {upcomingEvents.length > 0 ? (
  upcomingEvents.map((event, index) => (
    <li key={event.documentId}>
      <div className="image">
        {index === 0 ? (
          <Image src={ppcomingEventImg_1} alt="Event" />
        ) : (
          <Image src={ppcomingEventImg_2} alt="Event" />
        )}
      </div>
      <div className="content">
        <h6>
          <Link
            href={`/event-details/${event.documentId}`}
            onClick={() => {
              localStorage.setItem("eventDocumentId", event.documentId);
            }}
          >
            {event.title}
          </Link>
        </h6>
        <ul className="blog-meta">
          <li>
            <i className="flaticon-calendar"></i>{" "}
            {new Date(event.time).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </li>
        </ul>
      </div>
    </li>
  ))
) : (
  <li>Loading...</li>
)}
          </ul>
        </div>
        <div className="widget widget_location">
          <h5 className="widget-title">Event Location</h5>
          <iframe
            src={`https://maps.google.com/maps?q=${
              eventData ? encodeURIComponent(eventData.city) : "Mahaut, Dominica"
            }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="widget widget_cta">
          <div
            className="cta-widget-inner"
            style={{ backgroundImage: `url(assets/img/widgets/cta-bg.jpg)` }}
          >
            <h5>We have provided financial help to 5 million people</h5>
            <Link className="cr-btn ml-5" href="donate.html">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSidebar;
