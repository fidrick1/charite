import Image from "next/image"

import aboutAuthor from "@/assets/img/about/author.jpg"
import aboutAuthorSignature from "@/assets/img/about/signature.png"
import aboutThumb from "@/assets/img/about/about-three-right.png"

interface ContentType {
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
   list: string[];
   author: string;
   designation: string;
}

const about_content: ContentType = {
   sub_title: "About us",
   title: (<>We make a different life for <span>African people</span></>),
   desc: (<>There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou ndomised words even slightly believable Making this the first true.</>),
   list: ["Consectetur adipiscing elitsed", "Nostra dapibus varius et semper", "Nullam venenatis ultricies", "Environment For Our Next", "Consectetur adipiscing elitsed", "Maximus a augue Nullam ante"],
   author: "Ronald Richards",
   designation: "Funder & CEO , Charity Club",
}

const { sub_title, title, desc, list, author, designation } = about_content;

const About = () => {
   return (
      <div className="about-us-three pt-120 pb-55">
         <div className="container">
            <div className="row gap-80 align-items-center">
               <div className="col-xl-6">
                  <div className="about-us-content-three mb-65">
                     <div className="section-title mb-65">
                        <span className="section-title__subtitle mb-10">{sub_title}</span>
                        <h2>{title}</h2>
                     </div>
                     <p>{desc}</p>
                     <ul className="list-style-one pt-15">
                        {list.map((list, index) => (<li key={index}>{list}</li>))}
                     </ul>
                     <hr className="mt-30 mb-5" />
                     <div className="about-author">
                        <div className="about-author--img">
                           <Image src={aboutAuthor} alt="Author" />
                        </div>
                        <div className="about-author--content">
                           <h5>{author}</h5>
                           <span>{designation}</span>
                        </div>
                        <div className="about-author--signature">
                           <Image src={aboutAuthorSignature} alt="Signature" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="about-us-image-three mb-65">
                     <Image src={aboutThumb} alt="About" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
