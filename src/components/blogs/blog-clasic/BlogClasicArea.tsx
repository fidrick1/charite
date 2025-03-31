"use client"
import blog_data from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlogSidebar from "../common-blog";

const BlogClasicArea = () => {

   const [currentPage, setCurrentPage] = useState(1);

   const blogs = blog_data.filter(items => items.page === "clasic_blog")

   const itemsPerPage = 4;
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
      <div className="blog-clasic-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  {currentItems.map((item) => (
                     <div key={item.id} className="blog-item blog-item--clasic">
                        <div className="blog-item__img">
                           <Image src={item.thumb} alt="Blog Clasic" />
                           <div className="post-date">
                              <b>{item.date}</b>
                              <span>dec</span>
                           </div>
                        </div>
                        <div className="blog-item__content">
                           <ul className="blog-meta">
                              <li><i className="flaticon-user"></i> <Link href="#">Wade Warren</Link></li>
                              <li><i className="flaticon-bubble-chat"></i> <Link href="#">05 Comment</Link></li>
                           </ul>
                           <h4><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h4>
                           <p>{item.desc}</p>
                           <Link href={`/blog-details/${item.id}`} className="read-more">Read More</Link>
                        </div>
                     </div>
                  ))}

                  <div className="pagination">
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
               
               <div className="col-lg-4">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogClasicArea
