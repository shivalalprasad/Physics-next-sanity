'use client'


import React, { useState } from "react";
import Head from "next/Head"
import Script from "next/Script"
import "./nnn.css"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  return (
    
    <>
 <nav className="p-5 shadow flex items-center justify-between ">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <p className="website_name">GDC KMR</p>
        </span>
      </div>
    <div className={
            showMediaIcons ? "menu   mobile-menu" : "menu"
          }>
      <ul
        className="menu_links"
      >
        <li className="link">
          <Link href="./">HOME</Link>
        </li>
        <li className="link">
          <Link href="./LectureNotes">Lecture Notes</Link>
        </li>
        <li className="link">
          <Link href="./Activites">Activities</Link>
        </li>
        <li className="link">
          <Link href="./OldQuestionPapers">Old Question Papers</Link>
        </li>
        <li className="link">
          <Link href="./VideoLessons">VideoLessons</Link>
        </li>
        <li className="link">
          <Link href="./PhysicsInIndia">Physics in India</Link>
        </li>
        <li className="link">
          <Link href="./Practicals">Practicals</Link>
        </li>
      </ul>
    </div>
      <div className="hamburger-menu">
            <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
    </nav>

    </>
      
  )
}

export default Navbar
