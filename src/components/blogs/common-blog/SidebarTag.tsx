import Link from "next/link"

const tags: string[] = ["Charity", "African people", "Community", "Food", "Clean Water", "Education", "Health", "Volunteers", "Homeless child"]

const SidebarTag = () => {
   return (
      <div className="widget widget_tag_cloud">
         <h5 className="widget-title">Tags</h5>
         <div className="tagcloud">
            {tags.map((tag, i) => <Link key={i} href="#">{tag}</Link>)}
         </div>
      </div>
   )
}

export default SidebarTag
