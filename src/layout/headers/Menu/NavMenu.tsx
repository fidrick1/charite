"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import menu_data from "../../../data/MenuData";
import React, { useState } from "react";

const NavMenu = () => {
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <ul className="navbar-nav menu-open text-lg-end">
            {menu_data.map((menu: any) => (
                <li key={menu.id}
                onClick={() => openMobileMenu(menu.title)}
                    className={`${menu.has_dropdown ? "menu-item-has-children" : ""} 
                    ${navTitle === menu.title ? "open" : ""} `}
                >
                    <Link href={menu.link}
                        className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                        {menu.title}
                    </Link>

                    {menu.has_dropdown && (
                        <>
                            {menu.sub_menus && (
                                <ul className="sub-menu">
                                    {menu.sub_menus.map((sub_m: any, i: any) => (
                                        <li key={i} onClick={() => openMobileMenu(menu.title)} className={`${navTitle === menu.title ? "open" : ""}`}>
                                            <Link
                                                href={sub_m.link}
                                                className={
                                                    sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}>
                                                {sub_m.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;

