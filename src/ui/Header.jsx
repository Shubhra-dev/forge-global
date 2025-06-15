import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretDown, FaCaretRight, FaCaretUp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import WhoWeServe from "./WhoWeServe";
import WhatWeDo from "./WhatWeDo";
import Company from "./Company";

const headerMenus = [
  {
    name: "who we serve",
    dropDown: true,
    subPages: [
      {
        name: "individual investors",
        link: "/#",
        subPages: [
          {
            name: "accredited investors",
            link: "/accredited-investors",
          },
          {
            name: "seed & angel investors",
            link: "/seed-and-angel-investors",
          },
        ],
      },
      {
        name: "employee shareholders",
        link: "/employee-shareholders",
      },
      {
        name: "private companies",
        link: "/private-companies",
      },
      {
        name: "individual investors",
        link: "/#",
        subPages: [
          {
            name: "asset managers & hedge funds",
            link: "/asset-managers",
          },
          {
            name: "family offices",
            link: "/family-offices",
          },
          {
            name: "venture capital firms",
            link: "/venture-captal-firms",
          },
          {
            name: "wealth managers & RIAs",
            link: "/family-offices",
          },
        ],
      },
    ],
  },
  {
    name: "what we do",
    dropDown: true,
    subPages: [
      {
        name: "Trading",
        link: "/#",
        subPages: [
          {
            name: "Forge Market",
            link: "/forge-market",
          },
          {
            name: "seed & angel investors",
            link: "/seed-and-angel-investors",
          },
        ],
      },
      {
        name: "employee shareholders",
        link: "/employee-shareholders",
      },
      {
        name: "private companies",
        link: "/private-companies",
      },
      {
        name: "individual investors",
        link: "/#",
        subPages: [
          {
            name: "asset managers & hedge funds",
            link: "/asset-managers",
          },
          {
            name: "family offices",
            link: "/family-offices",
          },
          {
            name: "venture capital firms",
            link: "/venture-captal-firms",
          },
          {
            name: "wealth managers & RIAs",
            link: "/family-offices",
          },
        ],
      },
    ],
  },
  { name: "insights", link: "insights" },
  {
    name: "company",
    dropDown: true,
  },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavStack, setMobileNavStack] = useState([headerMenus]);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileNavStack([headerMenus]);
    }
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMobileNavClick = (item) => {
    if (item.subPages) {
      setMobileNavStack((prev) => [...prev, item.subPages]);
    } else {
      navigate(item.link);
      setMobileMenuOpen(false);
      setMobileNavStack([headerMenus]);
    }
  };

  const handleBack = () => {
    setMobileNavStack((prev) => prev.slice(0, -1));
  };

  const currentMobileMenu = mobileNavStack[mobileNavStack.length - 1];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white dark:bg-backgroundDark shadow-md text-black dark:text-white"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="max-w-content mx-auto w-full">
        <div
          className={`px-4 ${isSticky ? "smLap:w-10/12 smLap:px-0" : "smLap:w-[85%] smLap:px-4"} ${isSticky ? "laptop:w-9/12" : "laptop:w-[77%]"} m-auto h-[65px] bg-white dark:bg-backgroundDark tab:rounded-full ${isSticky ? "" : "tab:mt-3"} flex items-center justify-between`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-orange-500">▌▐</div>
            <span
              className="cursor-pointer font-semibold text-lg"
              onClick={() => navigate("/")}
            >
              Investment
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden tab:flex items-center gap-4">
            {headerMenus.map((menu, index) => (
              <div
                key={menu.name}
                onClick={menu.link ? () => navigate(`/${menu.link}`) : () => {}}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative"
              >
                <div className="py-2.5 cursor-pointer px-3 flex items-center gap-2">
                  <p className="font-medium capitalize text-textHeading dark:text-textHeadingDark">
                    {menu.name}
                  </p>
                  {menu.dropDown &&
                    (activeIndex === index ? <FaCaretUp /> : <FaCaretDown />)}
                </div>

                <AnimatePresence>
                  {activeIndex === index && menu.dropDown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-[110%] left-4 -translate-x-1/2 mt-2 z-50"
                    >
                      <div className="flex justify-start ml-6">
                        <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white dark:border-b-backgroundPrimaryDark"></div>
                      </div>

                      <div className="bg-white dark:bg-backgroundPrimaryDark shadow-md rounded-b-[15px] rounded-tr-[15px] p-5">
                        {activeIndex === 0 && <WhoWeServe />}
                        {activeIndex === 1 && <WhatWeDo />}
                        {activeIndex === 3 && <Company />}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="px-4 py-1.5 rounded-full bg-primary text-white hover:bg-primary/60 transition">
              Log In
            </button>

            {/* Hamburger Icon */}
            <div
              className="tab:hidden p-2 rounded-full border-2 border-borderPrimary dark:border-borderPrimaryDark bg-transparent hover:bg-gradient-to-tr hover:from-secondary2 hover:via-gray-200 hover:via-50% hover:to-secondary2 transition"
              onClick={toggleMobileMenu}
            >
              <RxHamburgerMenu />
            </div>

            {isSticky && (
              <button className="hidden tab:block px-4 py-1.5 rounded-full bg-transparent text-textHeading dark:text-textHeadingDark hover:bg-secondary2 border border-borderPrimary dark:border-borderPrimaryDark transition">
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "66.66%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-backgroundDark z-[100] shadow-lg p-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              {mobileNavStack.length > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <IoIosArrowBack /> Back
                </button>
              ) : (
                <span className="font-bold text-lg">Menu</span>
              )}
              <button onClick={toggleMobileMenu}>
                <RxHamburgerMenu />
              </button>
            </div>

            {/* Current Menu */}
            <div className="flex flex-col gap-2">
              {currentMobileMenu.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleMobileNavClick(item)}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <span className="capitalize font-medium">{item.name}</span>
                  {item.subPages && <FaCaretRight />}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
