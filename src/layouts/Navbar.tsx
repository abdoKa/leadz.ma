import React, { useEffect, useState } from "react";
import Leadz from "../assets/leadz.png";
import { useMediaQuery } from "@chakra-ui/react";
import menuIcon from "../assets/menu.svg";

function Navbar() {
  const [laptop] = useMediaQuery("(min-width: 1024px)");
  const [renderMobileMenu, setRenderMobileMenu] = useState<boolean>(false);

    useEffect(() => {
      if(renderMobileMenu) {
          document.body.style.position = "fixed";
      }
    },[renderMobileMenu])

  return (
    <>
      {!laptop && renderMobileMenu ? (
        <nav className="bg-[#27348a] flex-col items-center h-screen w-screen relative">
          <ul className="nav-items absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Products</a>
            </li>
            <li>
              <a href="#">Our Clients</a>
            </li>
            <li>
              <a href="#">Press & Podcast</a>
            </li>
            <li>
              <a href="#">Reach us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="relative md:bg-[#27348a] bg-transparent md:text-white md:flex md:items-center md:justify-between p-5 ">
          <div className="brand-logo">
            <img src={Leadz} alt="leadz" />
          </div>
          <ul className={`${laptop ? "nav-items" : "hidden"}`}>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Products</a>
            </li>
            <li>
              <a href="#">Our Clients</a>
            </li>
            <li>
              <a href="#">Press & Podcast</a>
            </li>
            <li>
              <a href="#">Reach us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          {!laptop && (
            <img
              className="absolute right-5 top-[10%] -translate-y-[10%] cursor-pointer"
              src={menuIcon}
              alt="menu"
              onClick={() => setRenderMobileMenu(true)}
            />
          )}
        </nav>
      )}
    </>
  );
}

export default Navbar;
