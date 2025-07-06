import { LuChevronDown } from "react-icons/lu";
import Button from "../components/reuseable/Button";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import shieldImg from "../assets/images/shield.png";
import bluelockImg from "../assets/images/bluelock.png";
import circleImg from "../assets/images/circle.png";
import pinkbookImg from "../assets/images/pinkbook.png";
import dollarImg from "../assets/images/dollar.png";
import HouseImg from "../assets/images/house.png";
import blogimg from "../assets/images/blog.svg";
import reportimg from "../assets/images/Reports.svg";
import comicimg from "../assets/images/comic.svg";
import calcimg from "../assets/images/calculator.svg";
import nnewsimg from "../assets/images/Newsletter.svg";
import ebookimg from "../assets/images/Ebook.svg";
import { useEffect } from "react";



const saveLinks = [
  { to: "/piggybank", img: shieldImg, label: "Piggy Bank" },
  { to: "/fixed", img: bluelockImg, label: "Safelock" },
  { to: "/goal", img: circleImg, label: "Target Savings" },
  { to: "/flexnaira", img: pinkbookImg, label: "Flex Naira" },
  { to: "/flexdollar", img: dollarImg, label: "Flex Dollar" },
  { to: "/housemoney", img: HouseImg, label: "HouseMoney" },
];

const resourcesLinks = [
  { to: "/blog", img:blogimg, label: "Blog" },
  { to: "/Report",img:reportimg, label: "Report" },
  { to: "comic", img: comicimg, label: "Comic" },
  { to: "/calculator", img: calcimg, label: "Calculator" },
  { to: "/newsletter", img:nnewsimg, label: "Newsletter" },
  { to: "/ebook", img: ebookimg, label: "Ebook" },

]
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      // Always show header at the very top
      setShowHeader(true);
    } else if (window.scrollY > lastScrollY && window.scrollY > 80) {
      // Scrolling down: show header
      setShowHeader(true);
    } else {
      // Scrolling up: hide header
      setShowHeader(false);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);


  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 h-24 w-full z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } h-24 bg-white`}>
        <div className=" max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between">
          <section className=" flex">
            <Link to="/">
              <main>
                <img src="./logo piggy.svg" alt="" />
              </main>
            </Link>
            
            <main className=" flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
            
<Link to="#" className="relative group">
  <nav className="flex items-center gap-0.5">
    <span>Save</span>
    <span>
      <LuChevronDown size={20} />
    </span>
  </nav>
 <div className="absolute left-1 top-full mt-2 w-120 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
    <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6">
      {saveLinks.map((item) => (
        <Link
          to={item.to}
          key={item.label}
          className="flex items-center gap-2 hover:bg-slate-100 rounded px-4 py-4 cursor-pointer w-50"
        >
          <img src={item.img} alt="" className="w-7 h-auto" />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  </div>
</Link>

              <Link to="/invest">
                <nav>Invest</nav>
              </Link>
              <Link to="/stories">
                <nav>Stories</nav>
              </Link>
              <Link to="/faqs">
              <nav>FAQs</nav>
              </Link>
              <Link to="/Shop">
              <nav>Shop</nav>
              </Link>

              <Link to="#" className="relative group">
  <nav className="flex items-center gap-0.5">
    <span>Resources</span>
    <span>
      <LuChevronDown />
    </span>
  </nav>
  <div className="absolute left-1 top-full mt-2 w-100 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
    <div className="grid grid-cols-2 gap-4 p-6">
      {resourcesLinks.map((item) => (
        <Link
          to={item.to}
          key={item.label}
          className="flex items-center gap-2 hover:bg-slate-100 rounded px-4 py-2 cursor-pointer"
        >
          <img src={item.img} alt="" className="w-7 h-auto" />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  </div>
</Link>
            </main>
          </section>
          <section className=" flex gap-2 max-tablet:hidden">
            <Button title="Sign In" borderColor="#122231" />
            <Button
              title="Create free Account"
              bgColor="#122231"
              textColor="#fff"
            />
          </section>
          <section className=" hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </div>
      </header>

      <div className="pt-24">{toggle && <Sidebar handleToggle={handleToggle} />}</div>
    </>
  );
};

export default Header;