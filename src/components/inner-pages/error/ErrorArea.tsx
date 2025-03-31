import Image from "next/image"
import Link from "next/link"

import errorImg from "@/assets/img/404.png"

const ErrorArea = () => {
   return (
      <div className="error-page-area py-120 text-center">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <Image src={errorImg} alt="404 Error" />
                  <div className="section-title pt-55 mb-50">
                     <h2>Opps! This page not fund</h2>
                     <p>Page does not fund or some other error occured. Go to our Home page</p>
                  </div>
                  <Link href="/" className="cr-btn">Go to home page</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ErrorArea
