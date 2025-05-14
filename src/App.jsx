import { useSelector } from "react-redux";
import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import ReportCardStar from "./components/ReportCardStar";
import ReportCardGeneral from "./components/ReportCardGeneral";
import PhotoWithBg from "./components/PhotoWithBg";
import PhotoWithBgReverse from "./components/PhotoWithBgReverse";
import CompanyCards from "./components/CompanyCards";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-backgroundTertiary dark:text-white p-8 transition-all">
      <h1 className="text-3xl font-bold mb-4">
        React + Tailwind + Redux Theme
      </h1>
      <div className="fixed right-0 top-0 z-[100]">
        <ThemeToggle />
      </div>
      <div className="pt-2"></div>
      <PrimaryButton icon={true}> Button </PrimaryButton>
      <div className="pt-2"></div>
      <SecondaryButton icon={true}> Button </SecondaryButton>
      <div className="flex items-center gap-6">
        <ReportCardStar />
        <ReportCardGeneral />
        <PhotoWithBg />
      </div>
      <PhotoWithBgReverse />
      <div className="mt-4">
        <CompanyCards />
      </div>
    </div>
  );
};

export default App;
