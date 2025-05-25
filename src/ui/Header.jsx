import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mod

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white dark:bg-backgroundDark shadow-md text-black dark:text-white"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="max-w-content mx-auto w-full ">
        <div className="px-4 smLap:px-4 smLap:w-[85%] laptop:w-[77%] m-auto h-[65px] bg-white dark:bg-backgroundDark rounded-full my-3 flex items-center justify-between">
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

          {/* Navigation */}
          <nav className="hidden tab:flex items-center gap-8 text-sm font-medium">
            <a
              onClick={() => navigate("/accredited-investors")}
              className="cursor-pointer"
            >
              Acc Inv ▾
              {/* <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 -translate-x-1/2 mt-2"
                >
                 
                  <div className="flex justify-center">
                    <div className="w-0 h-0 border-l-8 shadow-allSide border-r-8 border-b-8 border-transparent border-b-white"></div>
                  </div>

                
                  <div className="bg-white shadow-allside shadow-gray-400 rounded-xl p-10 space-y-2">
                    DropDown
                  </div>
                </motion.div>
              </AnimatePresence> */}
            </a>
            <a
              onClick={() => navigate("/seeds-and-angel-investors")}
              className="cursor-pointer"
            >
              Seed & Angel ▾
            </a>
            <a
              onClick={() => navigate("/employee-shareholders")}
              className="cursor-pointer"
            >
              Emp Share ▾
            </a>
            <a
              onClick={() => navigate("/assets-manager")}
              className="cursor-pointer"
            >
              Asset Mg. ▾
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className={`px-4 py-1.5 rounded-full border border-gray-700 dark:border-white text-black dark:text-white`}
            >
              Login
            </button>

            <button className="px-4 py-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
