import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, SocialMedia } from "../constants";
import { webLogo, menu, close, fb, ln, instagram, github } from "../assets";

const SocialSection = ({ index, img, source_link }) => {

  const handleClick = () => {
    window.open(source_link, "_blank");
  };
  return (
    <div
      className='relative cursor-pointer'
      onClick={() => handleClick()}
    >
      <img
        src={img}
        className='class="transition w-7  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150 rounded-xl '
      // className='w-7 h-7 object-cover rounded-2xl'
      />
    </div>
  )
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={webLogo} alt='logo' className='w-20 h-20 object-contain' />
          {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Arun &nbsp;
          </p> */}
        </Link>


        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className='class="transition py-0.5 px-4  ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-150 rounded-xl mt-[20px] '
              >{nav.title}</a>
            </li>
          ))}
        </ul>



        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='flex  gap-5 cursor-pointer ml-5'>
        {SocialMedia.map((social, index) => (
          <SocialSection
            key={`social-${index}`}
            index={index}
            {...social}
          />
        ))}
      </div> */}
    </nav>
  );
};

export default Navbar;