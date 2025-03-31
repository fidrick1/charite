"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/footerData";

import footerLogo from "@/assets/img/logos/logo-white.png"
import donate from "@/assets/img/footer/donate-by.png";

import footerGallery_1 from "@/assets/img/footer/gallery-two1.jpg";
import footerGallery_2 from "@/assets/img/footer/gallery-two2.jpg";
import footerGallery_3 from "@/assets/img/footer/gallery-two3.jpg";
import footerGallery_4 from "@/assets/img/footer/gallery-two4.jpg";
import footerGallery_5 from "@/assets/img/footer/gallery-two5.jpg";
import footerGallery_6 from "@/assets/img/footer/gallery-two6.jpg";

interface ContentType {
   footer_about_text: string;
   gallery: StaticImageData[];
   gallery_title: string;
   news_title: string;
   news_text: string;
   copyright_text: string;
}

const footer_content: ContentType = {
   footer_about_text: "Wimply dummy text of the priatypeset ting industry orem Ipsum has Maecenas quis eros at ante lacinia efficitur.",
   gallery: [footerGallery_1, footerGallery_2, footerGallery_3, footerGallery_4, footerGallery_5, footerGallery_6],
   news_title: "Newsletter",
   news_text: "Wimply dummy text of the priatyp industry orem Ipsum",
   gallery_title: "Photo Gallery",
   copyright_text: "Copyright 2025 All Right Reserved",
}

const { footer_about_text, gallery, news_title, news_text, gallery_title, copyright_text } = footer_content

const FooterTwo = () => {
   return (
      <footer className="footer-area footer-area--two text-white pt-120">
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-xl-3 col-sm-6">
                  <div className="widget widget_about">
                     <div className="logo_footer mb-25">
                        <Link href="/">
                           <Image src={footerLogo} alt="Logo" />
                        </Link>
                     </div>
                     <p> {footer_about_text} </p>
                     <div className="social-style-one pt-20">
                        <SocialIcon />
                     </div>
                  </div>
               </div>

               {footer_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-2 col-sm-3 col-6">
                     <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{item.widget_title}</h5>
                        <ul>{item.footer_link.map((li, i) => (<li key={i}><Link href={li.link}>{li.link_title}</Link></li>))}</ul>
                     </div>
                  </div>
               ))}

               <div className="col-xl-5">
                  <div className="row">
                     <div className="col-sm-6">
                        <div className="widget widget_gallery">
                           <h4 className="widget-title">{gallery_title}</h4>
                           <div className="gallery-photos">
                              {gallery.map((gallery, index) => (
                                 <a key={index} href="assets/img/footer/gallery-two1.jpg"><Image src={gallery} alt="Gallery" /></a>
                              ))}
                           </div>
                        </div>
                     </div>

                     <div className="col-sm-6">
                        <div className="widget widget_subscribe">
                           <h4 className="widget-title">{news_title}</h4>
                           <p>{news_text}</p>
                           <form onClick={(e) => e.preventDefault()}>
                              <input type="email" placeholder="Email address" required />
                              <button type="submit"><i className="flaticon-right-arrow"></i></button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="footer-bottom mt-70">
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

export default FooterTwo
