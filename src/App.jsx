import { useSelector } from "react-redux";
import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import ReportCard from "./components/ReportCard";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8 transition-all">
      <h1 className="text-3xl font-bold mb-4">
        React + Tailwind + Redux Theme
      </h1>
      <ThemeToggle />
      <div className="pt-2"></div>
      <PrimaryButton icon={true}> Button </PrimaryButton>
      <div className="pt-2"></div>
      <SecondaryButton icon={true}> Button </SecondaryButton>

      <ReportCard />
    </div>
  );
};

export default App;
