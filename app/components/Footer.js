import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div
      className="container py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="public/images/gdc-logo.png" alt="Logo" width={30}
          height={30} className="d-inline-block align-text-top"/>
          <span className="ml-3 text-xl">GDC KMR</span>
        </a>
        <p className="mt-2 text-sm text-gray-900 font-bold">Don&apos;t wait for a right time,it never comes you need to create it.</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className=" md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Address</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="hover:underline" href="https://goo.gl/maps/Wxc2JbTsVujAdeuU6" target="_blank">🌏
                Government Degree college Rd<br />Kamareddy<br />Telangana 503111
              </a>
            </li>
          </nav>
        </div>
        <div className=" md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
          <nav className="list-none mb-10">
            <li>
              <span className="text-gray-600 hover:text-gray-800 hover:underline"><a
                  href="mailto:prl-gdc-kmr-ce@telangana.gov.in">E-mail</a></span>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fax:</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Phone:</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">Developer&apos;s Contact</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
      <a href="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

        <img src="public/images/gdc-logo.png" alt="Logo" width={30}
          height={30} className="d-inline-block align-text-top"/>
        <span className="ml-3 text-xl">GDC KMR</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">&copy; 2023
        Government Arts & Science College Kamareddy -All Rights Reserved
      </p>

      <span className="text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-xl">Live
        Count</span>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        <img src="https://counter10.optistats.ovh/private/freecounterstat.php?c=8sj48e9xtkpnmamwe6dqf3r6yhfx2dbf"
          className="w-16 h-4 " />
      </p>


    </div>
  </footer>
  )
}

export default Footer
