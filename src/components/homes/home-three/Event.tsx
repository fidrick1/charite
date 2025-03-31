"use client"
import event_data from "@/data/EventData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"

const Event = () => {

   const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      fade: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            }
         },
      ],
   }

   return (
      <div className="event-area-three overlay bgs-cover pt-120 pb-80 rel z-1" style={{ backgroundImage: `url(/assets/img/causes/urgent-causes.jpg)` }}>
         <div className="container">
            <div className="row gap-40">
               <div className="col-lg-4">
                  <div className="event-three-content mt-50 rmt-0 mb-30 rmb-65">
                     <div className="section-title mb-30">
                        <span className="section-title__subtitle mb-15">Our Event</span>
                        <h3>Our Upcoming <span>Event</span></h3>
                        <p>Lorem ipsum dolor sit amet, conseceadipisicing elit. Rem autem voluptaobcaecati
                           consectetur adipisicing n magna tellus fringilla eleifend.</p>
                        <p>was popularised in the 1960s with the release of Letraset sheets containing</p>
                     </div>
                     <Link className="cr-btn ml-5 mt-25" href="#">See all event</Link>
                  </div>
               </div>
               
               <div className="col-lg-8">
                  <Slider {...settings} className="event-three-slider row">
                     {event_data.filter((item) => item.page === "home_3").map((item) => (
                        <div key={item.id} className="col-lg-6">
                           <div className={`event-item-three ${item.item_bg}`}>
                              <div className="image">
                                 <Image src={item.thumb} alt="Event" />
                              </div>
                              <div className="content">
                                 <h4><Link href="/event-details">{item.title}</Link></h4>
                                 <ul className="blog-meta">
                                    <li><i className="flaticon-time"></i> <Link href="#">{item.time}</Link></li>
                                    <li><i className="flaticon-map"></i> <Link href="#">{item.city}</Link></li>
                                 </ul>
                                 <p>{item.desc}</p>
                                 <Link className="event-btn" href="/event-details">Read more <i className="flaticon-chevron"></i></Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Event
