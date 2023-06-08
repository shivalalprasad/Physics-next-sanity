import React from 'react'

const Header = () => {
  return (
    <>
    <header className=" body-font ">
    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <a href="https://physics-demo-gdckmr.web.app/"><span
          className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img src="https://physics.gdckmr.repl.co/utills/images/gdclogo.png"
           alt="Logo" width={30} height={30}
            className="d-inline-block align-text-top"/>
          <span className="ml-3 text-xl">GDC KMR</span>
        </span></a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
        <span className="mr-5 text-2xl font-bold hover:text-gray-900">Physics Department</span>
      </nav>
    </div>
    </header>
    </>
  )
}

export default Header
