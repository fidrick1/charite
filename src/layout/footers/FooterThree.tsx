"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import footer_data from "@/data/footerData";
import Count from "@/components/common/Count";

import footerLogo from "@/assets/img/logos/logo-white.png"
import donate from "@/assets/img/footer/donate-by.png";
import footerMap from "@/assets/img/footer/map.png"

import latestNews_1 from "@/assets/img/footer/latest-news1.jpg";
import latestNews_2 from "@/assets/img/footer/latest-news2.jpg";

interface ContentType {
   footer_about_text: string;
   news_title: string;
   copyright_text: string;
   latest_news: {
      id: number
      img: StaticImageData;
      title: string;
      date: number
   }[];
}

const footer_content: ContentType = {
   footer_about_text: "Wimply dummy text of the priatypeset ting industry orem Ipsum has Maecenas quis eros at ante lacinia efficitur.",
   news_title: "Subscribe Newslatters",
   copyright_text: "Copyright 2025 All Right Reserved",
   latest_news: [
      {
         id: 1,
         img: latestNews_1,
         title: "Children in South Africa",
         date: 12,
      },
      {
         id: 2,
         img: latestNews_2,
         title: "Education for All Poor Child",
         date: 18,
      },
   ]
}

const { footer_about_text, latest_news, news_title, copyright_text } = footer_content

const FooterThree = () => {
   return (
      <footer className="footer-area mt-95 footer-area--three overlay text-white" style={{ backgroundImage: `url(assets/img/footer/footer-three-bg.jpg)` }}>
         <div className="container">
            <div className="footer-top">
               <div className="row no-gutter">
                  <div className="col-lg-7">
                     <div className="subscribe-part">
                        <h4>{news_title}</h4>
                        <form onClick={(e) => e.preventDefault()}>
                           <input type="email" placeholder="Email address" required />
                           <button className="cr-btn btn--style-two" type="submit">Subscribe</button>
                        </form>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="hotline-part overlay bgs-cover" style={{ backgroundImage: `url(assets/img/footer/footer-bg.jpg)` }}>
                        <h4><i className="flaticon-headphones"></i> Hot Line</h4>
                        <span className="h3"><Link href="callto:333444555">333 - 444 555</Link></span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row justify-content-between" style={{marginTop:"75px"}}>
               <div className="col-xl-3 col-sm-6">
                  <div className="widget widget_about">
                     <div className="logo_footer mb-25">
                        <Link href="/">
                           <Image src={footerLogo} alt="Logo" />
                        </Link>
                     </div>
                     <p>{footer_about_text}</p>
                     <div className="footer-counter-wrap">
                        <div className="counter-item counter-text-wrap">
                           <div className="counter-item__icon counter-item__icon--green"><i
                              className="flaticon-solidarity"></i></div>
                           <div className="counter-item__content">
                              <span className="count-text" data-speed="3000" data-stop="876000"><Count number={876000} /></span>
                              <h5 className="counter-title">Donation</h5>
                           </div>
                        </div>
                        <div className="counter-item counter-text-wrap">
                           <div className="counter-item__icon"><i className="flaticon-help"></i></div>
                           <div className="counter-item__content">
                              <span className="count-text" data-speed="3000" data-stop="45000"><Count number={45000} /></span>
                              <h5 className="counter-title">Volunteers</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {footer_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-2 col-sm-3 col-6">
                     <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{item.widget_title}</h5>
                        <ul>
                           {item.footer_link.map((li, i) => (<li key={i}><Link href={li.link}>{li.link_title}</Link></li>))}
                        </ul>
                     </div>
                  </div>
               ))}

               <div className="col-xl-5">
                  <div className="row">
                     <div className="col-sm-6">
                        <div className="widget widget_recent_post">
                           <h4 className="widget-title">Latest News</h4>
                           <ul>
                              {latest_news.map((news) => (
                                 <li key={news.id}>
                                    <div className="image">
                                       <Image src={news.img} alt="News" />
                                    </div>
                                    <div className="content">
                                       <h6><Link href="/blog-details">Children in South Africa</Link></h6>
                                       <span className="date"><Link href="#"><i className="flaticon-time"></i> {news.date} Dec, 2025</Link></span>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     
                     <div className="col-sm-6">
                        <div className="widget widget_map">
                           <h4 className="widget-title">Our Footprint</h4>
                           <Image src={footerMap} alt="Map" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-bottom mt-30">
            <div className="container">
               <div className="footer-bottom__inner">
                  <div className="donate-by">
                     <span>Donate by :</span>
                     <Image src={donate} alt="Donate By" />
                  </div>
                  <div className="copyright">
                     <p>{copyright_text}</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterThree
