interface DataType {
   id:number;
   page:string;
   widget_title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[];

}

const footer_data: DataType[] = [
   {
      id:1,
      page:"home_1",
      widget_title: "About",
      footer_link: [{ link: "#", link_title: "Home" }, { link: "#", link_title: "Donation" }, { link: "#", link_title: "About us" }, { link: "#", link_title: "Event" }, { link: "#", link_title: "Features" },]
   },
   {
      id:2,
      page:"home_1",
      widget_title: "Quick links",
      footer_link: [{ link: "#", link_title: "Causes" }, { link: "#", link_title: "About" }, { link: "#", link_title: "New campaign" }, { link: "#", link_title: "Site map" }, { link: "#", link_title: "Stories" },]
   },
   {
      id:3,
      page:"home_1",
      widget_title: "Explore",
      footer_link: [{ link: "#", link_title: "Donate" }, { link: "#", link_title: "Campaigns" }, { link: "#", link_title: "Fundraise" }, { link: "#", link_title: "Volunteers" }, { link: "#", link_title: "Sponsors" },]
   },

   // home two

   {
      id:1,
      page:"home_2",
      widget_title: "About",
      footer_link: [{ link: "#", link_title: "Home" }, { link: "#", link_title: "Donation" }, { link: "#", link_title: "About us" }, { link: "#", link_title: "Event" },]
   },
   {
      id:2,
      page:"home_2",
      widget_title: "Quick links",
      footer_link: [{ link: "#", link_title: "Causes" }, { link: "#", link_title: "About" }, { link: "#", link_title: "New campaign" }, { link: "#", link_title: "Site map" },]
   },
]

export default footer_data;