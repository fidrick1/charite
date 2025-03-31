"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

// Define the types of the event data
interface EventThumb {
   url: string;
   alternativeText?: string;
 }
 
 interface EventData {
   id: number;
   documentId: string;
   title: string;
   time: string;
   city: string;
   item_bg: string;
   thumb?: EventThumb | null; // Ensure `thumb` is an object or null
   desc?: { children: { text: string }[] }[]; // Optional field
 }
 

const EventArea = () => {
  const [events, setEvents] = useState<EventData[]>([]); // State to store fetched events data
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Track loading state

  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/events?populate=*");
        const data = await response.json();
        setEvents(data.data); // Assuming the events are in the `data` field of the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty array ensures this runs once when the component mounts

  const currentItems = events.slice(itemOffset, endOffset);
  const totalPages = Math.ceil(events.length / itemsPerPage);

  // Handle pagination clicks
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }

    const newOffset = (pageNumber - 1) * itemsPerPage;
    setItemOffset(newOffset);
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Render pagination links
  const renderPaginationLinks = () => {
    return pageNumbers.map((pageNumber) => (
      <li key={pageNumber} className={pageNumber === currentPage ? 'page-numbers current' : 'page-numbers'}>
        <a style={{ cursor: "pointer" }} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </a>
      </li>
    ));
  };

 // Function to handle the rich-text 'desc' field and extract text (limited to 30 characters)
const getEventDescription = (desc: { children: { text: string }[] }[] | undefined) => {
   if (!desc || !Array.isArray(desc)) return null; // Check if 'desc' is an array
 
   // Extract text from the description
   const fullText = desc.map(paragraph => paragraph.children.map(child => child.text).join(" ")).join(" ");
 
   // Limit the description to 30 characters
   const truncatedText = fullText.length > 40 ? fullText.substring(0, 40) + "..." : fullText;
 
   return <p>{truncatedText}</p>;
 };

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return (
    <div className="our-events-page py-120 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          {currentItems.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6">
              <div className={`event-item-three ${item.item_bg}`}>
                <div className="image">
                <Image src={item.thumb ? `http://localhost:1337${item.thumb.url}` : "/default-thumbnail.jpg"}
                 alt={item.thumb && (item.thumb as any).alternativeText  || "Event"} width={500} height={300} objectFit="cover" />
                </div>
                <div className="content">
                  <h4><Link   href={`/event-details/${item.documentId}`}  onClick={() => {    localStorage.setItem('eventDocumentId', item.documentId); // Store the documentId in localStorage
                       }} >{item.title}</Link></h4>
                  <ul className="blog-meta">
                  <li>
                     <i className="flaticon-time"></i> 
                                                    <Link  href={`/event-details/${item.documentId}`}  onClick={() => {    localStorage.setItem('eventDocumentId', item.documentId); // Store the documentId in localStorage
                       }}  >
                                                          {item.time ? format(new Date(item.time), "MMMM d, yyyy h:mm a") : "TBA"}
                                                                                                                           </Link>
                                                                                                                           </li>
                    <li><i className="flaticon-map"></i> <Link  href={`/event-details/${item.documentId}`}  onClick={() => {    localStorage.setItem('eventDocumentId', item.documentId); // Store the documentId in localStorage
                       }} >{item.city}</Link></li>
                  </ul>
                  {/* Render description */}
                  <div>{getEventDescription(item.desc)}</div>
                  <Link className="event-btn"  href={`/event-details/${item.documentId}`}
                       onClick={() => {    localStorage.setItem('eventDocumentId', item.documentId); // Store the documentId in localStorage
                       }}    > Read more <i className="flaticon-chevron"></i> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination pt-10">
          <ul className="list-wrap d-flex align-items-center justify-content-center" style={{ margin: "0" }}>
            <li className="prev page-numbers">
              <a onClick={() => handlePageClick(currentPage - 1)} style={{ cursor: 'pointer' }} className={currentPage === 1 ? 'disabled' : ''}>
                <i className="flaticon-left-chevron"></i>
              </a>
            </li>
            {renderPaginationLinks()}
            <li className="next page-numbers">
              <a onClick={() => handlePageClick(currentPage + 1)} style={{ cursor: 'pointer' }} className={currentPage === totalPages ? 'disabled' : ''}>
                <i className="flaticon-chevron"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventArea;
