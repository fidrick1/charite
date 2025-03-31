interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: true,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: true,
        title: "About us",
        link: "/about",
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Events",
        link: "/events",
        
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Gallery",
        link: "/portfolio",
    },
    {
        id: 5,
        has_dropdown: true,
        title: "Our Team",
        link: "/volunteers",
    },
    {
        id: 6,
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-clasic", title: "Blog Clasic" },
            { link: "/blog-slider", title: "Blog Slider" },
            { link: "/blog-details", title: "Blog Details" },
        ],
    },
];
export default menu_data;
