import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
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
          ? "bg-white dark:bg-gray-900 shadow-md text-black dark:text-white"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-orange-500">▌▐</div>
          <span className="font-semibold text-lg">Investment</span>
        </div>

        {/* Navigation */}
        <nav className="hidden tab:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:underline">
            Who We Serve ▾
          </a>
          <a href="#" className="hover:underline">
            What We Do ▾
          </a>
          <a href="#" className="hover:underline">
            Insights ▾
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
            className={`px-4 py-1.5 rounded-full border ${
              isSticky
                ? "border-gray-700 dark:border-white text-black dark:text-white"
                : "border-white text-white"
            }`}
          >
            Login
          </button>

          <button className="px-4 py-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
