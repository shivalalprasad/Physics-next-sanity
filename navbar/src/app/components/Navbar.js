'use client'

import React, { useState } from "react";
import { GiHamburgerMenu,GrFormClose} from "react-icons/gi";
import './navbar.scss'

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    
  return (
  <>
    <nav className="p-5 shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <p className="website_name">GDC KMR</p>
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
        </span>
      </div>
<div className="menu">
      <ul
        className={
            showMediaIcons ? "md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 menu_links   top-[80px] opacity-100" : "md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 menu_links"
          }>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500">HOME</a>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500"
            >Lecture Notes</a
          >
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500"
            >Activities</a
          >
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500"
            >Old Question Papers</a
          >
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500"
            >Old Question Papers</a
          >
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500"
            >Physics in India</a
          >
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <a href="#" className=" hover:text-cyan-500 duration-500"
            >Practicals</a
          >
        </li>
      </ul>
    </div>
    </nav>

    {/* <script>
      function Menu(e) {
        let list = document.querySelector("ul");
        e.name === "menu"
          ? ((e.name = "close"),
            list.classList.add("top-[80px]"),
            list.classList.add("opacity-100"))
          : ((e.name = "menu"),
            list.classList.remove("top-[80px]"),
            list.classList.remove("opacity-100"));
      }
    </script> */}

    </>
  )
}

export default Navbar
