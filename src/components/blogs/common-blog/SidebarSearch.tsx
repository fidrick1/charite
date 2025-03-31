"use client"

const SidebarSearch = () => {
   return (
      <div className="widget widget_search">
         <h5 className="widget-title">Search Causes</h5>
         <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <div className="form-group">
               <input type="text" placeholder="Search key word" required />
            </div>
            <button className="submit-btn" type="submit"><i
               className="flaticon-magnifying-glass"></i></button>
         </form>
      </div>
   )
}

export default SidebarSearch
