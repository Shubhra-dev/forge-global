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
import PhotoCardWithButton from "./components/PhotoCardWithButton";
import ImageBoxTopCornerRounded from "./components/ImageBoxTopCornerRounded";
import IconBox1 from "./components/IconBox1";
import TextCardWithSeperator from "./components/TextCardWithSeperator";
import PrivateMarketPanel from "./components/PrivateMarketPanel";
import PrivateMarketAccordion from "./components/PrivateMarketAccordion";
import IconBox2 from "./components/IconBox2";
import ForgeInvestmentOutLookCard from "./components/ForgeInvestmentOutLookCard";

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
      <SecondaryButton iconUp={true}>Button</SecondaryButton>
      <div className="flex items-center gap-6">
        <ReportCardStar />
        <ReportCardGeneral />
        <PhotoWithBg />
      </div>
      <PhotoWithBgReverse />
      <div className="my-4 flex gap-2 items-start">
        <CompanyCards />
        <PhotoCardWithButton />
      </div>
      <div className=" flex items-center gap-3 w-5/6 m-auto">
        <ImageBoxTopCornerRounded />
        <TextCardWithSeperator />
        <IconBox2 />
      </div>
      <IconBox1 />
      <div className=" flex items-center gap-3 w-5/6 m-auto my-3">
        <PrivateMarketPanel />
      </div>
      <div className=" flex items-center gap-3 w-5/6 m-auto my-3">
        <ForgeInvestmentOutLookCard />
      </div>
      <PrivateMarketAccordion />
    </div>
  );
};

export default App;
