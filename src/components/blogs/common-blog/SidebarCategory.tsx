import Link from "next/link"

const category: string[] = ["Foods for homeless Child", "African People", "Education all poor child", "Upcoming news about event", "Downation for help"]

const SidebarCategory = () => {
   return (
      <div className="widget widget_catagory">
         <h5 className="widget-title">News Categories</h5>
         <ul className="catagory-items">
            {category.map((item, i) => <li key={i}><Link href="/blog">{item}</Link></li>)}
         </ul>
      </div>
   )
}

export default SidebarCategory
