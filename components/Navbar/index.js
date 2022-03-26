import React, { useState } from "react";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full bg-blue-900">
        <div className="flex flex-no-shrink items-stretch h-12">
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
          >
            Rezi Ferdiansyah
          </a>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <img src={isOpen ? "/close.png" : "toggle.png"} />
          </div>
        </div>
        <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a
              href="#home"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
            >
              Home
            </a>
            <a
              href="#about"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
            >
              About
            </a>
            <a
              href="#portofolio"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
            >
              Portofolio
            </a>
            <a
              href="#contact"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
