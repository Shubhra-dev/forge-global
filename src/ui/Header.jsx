import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
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
            <a href="#" className="hover:underline">
              About ▾
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
