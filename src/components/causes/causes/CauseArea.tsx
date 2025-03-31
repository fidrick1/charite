"use client"
import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"
import CircleProgress from "@/hooks/Circular"
import { useState } from "react"

const CauseArea = () => {

   const [currentPage, setCurrentPage] = useState(1);

   const blogs = cause_data.filter(items => items.page === "inner_page")

   const itemsPerPage = 9;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blogs.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blogs.length / itemsPerPage);

   // click to request another page.
   const handlePageClick = (pageNumber: number) => {
      if (pageNumber < 1 || pageNumber > totalPages) {
         return; // Avoid going to negative pages or beyond the total number of pages
      }

      const newOffset = (pageNumber - 1) * itemsPerPage; // Calculate the new offset
      setItemOffset(newOffset);
      setCurrentPage(pageNumber); // Update the currentPage state
   };

   // Calculate total number of pages
   const totalPages = Math.ceil(blogs.length / itemsPerPage);

   // Generate an array of page numbers
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

   return (
      <div className="our-cause-page py-120 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               {currentItems.map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`cause-two-item ${item.item_bg}`}>
                        <div className="image">
                           <Image src={item.img} alt="Cause" />
                        </div>
                        <div className="content">
                           <div className={`circle-progresss ${item.progress_bg}`}>
                              <div className="chart" data-percent="65">
                                 <span><CircleProgress finish={item.percentage} /></span>
                              </div>
                           </div>
                           <h4><Link href={`/causes-details/${item.id}`}>{item.title}</Link></h4>
                           <div className="cause-price cause-price--green">
                              <span>Raised : ${item.raised}</span>
                              <span>Goal : ${item.goal}</span>
                           </div>
                           <p> {item.desc}</p>
                           <div className="cause-btn">
                              <Link className={`cr-btn ${item.btn_bg}`} href="#">Donation now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="pagination pt-20">
               <ul className="list-wrap d-flex align-items-center justify-content-center" style={{margin:"0"}}>
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
   )
}

export default CauseArea
