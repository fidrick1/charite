import Link from "next/link"

const SidebarCta = () => {
   return (
      <div className="widget widget_cta">
         <div className="cta-widget-inner" style={{ backgroundImage: `url(assets/img/widgets/cta-bg.jpg)` }}>
            <h5>We have provided financial help to 5 million people</h5>
            <Link className="cr-btn ml-5" href="/donate">Donate Now</Link>
         </div>
      </div>
   )
}

export default SidebarCta
