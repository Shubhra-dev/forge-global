import LogoDark from "../../assets/icons/Logo.svg";
import LogoLight from "../../assets/icons/LogoLight.svg";
import Investment from "../../assets/icons/TextInvestment.svg";
import InvestmentDark from "../../assets/icons/TextInvestmentDark.svg";
import BigText from "../../components/BigText";
import ExtraSmallText from "../../components/ExtraSmallText";
import SmallText from "../../components/SmallText";
import { FiLayers } from "react-icons/fi";
import Profile from "../../assets/Profile.jpg";
import SmallHeading from "../../components/SmallHeading";
import { BiBuildings, BiBuoy } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import RightIndent from "../../assets/icons/RightIndent.svg";
import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { BiSearch } from "react-icons/bi";

function DashboardLayout({ children, activeTab = 1 }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const shortEmail = (email) =>
    email.length > 15 ? email.slice(0, 20) + ".." : email;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarIsOpen(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarIsOpen]);
  return (
    <div className="bg-white w-full mt-2 tab:my-5 max-w-content m-auto relative flex items-start justify-normal sm:gap-5">
      <div
        ref={sidebarRef}
        className={`${sidebarIsOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none tab:translate-x-0 tab:opacity-100 tab:pointer-events-auto"} transform transition-transform duration-300 ease-in-out ${sidebarIsOpen ? "translate-x-0" : "-translate-x-full"} tab:translate-x-0 tab:block absolute tab:top-5 rounded-md bg-gray-50 shadow-xl w-3/5 sm:w-[35%] z-10 tab:w-1/5 h-screen no-scrollbar overflow-y-scroll p-2.5 pb-10 `}
      >
        <div className="tab:hidden w-full flex items-center justify-end py-2">
          <CgClose
            onClick={() => setSidebarIsOpen(false)}
            className="rounded-full border border-borderPrimary text-xl hover:bg-red-950 hover:text-white cursor-pointer p-1"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            onClick={() => navigate(`/`)}
            className="flex items-center justify-center gap-2"
          >
            <img src={LogoDark} alt="logo" className="hidden dark:block" />
            <img src={LogoLight} alt="logo" className="dark:hidden" />
            <img
              src={InvestmentDark}
              alt="logo"
              className="hidden dark:block"
            />
            <img src={Investment} alt="logo" className="dark:hidden" />
          </div>
        </div>
        <div className="mt-10 mx-2.5 bg-secondary rounded-[20px] p-2.5">
          <BigText
            align={`text-center`}
            textColor={`text-white`}
            textColorDark={` `}
            fontWeight={`font-semibold`}
          >
            Hi! Shahriar
          </BigText>
          <ExtraSmallText
            extraClass={`pt-1`}
            fontWeight={`font-semibold`}
            align={`text-center`}
            textColor={`text-white/50`}
            textColorDark={`text-white/50`}
          >
            Welcome back!
          </ExtraSmallText>
          <div className="mt-2.5 flex items-center justify-center gap-2">
            <button className="bg-secondary2 rounded-md py-1.5 px-3 text-textSubTitle text-sm font-medium">
              Buy
            </button>
            <button className="bg-secondary2 rounded-md py-1.5 px-3 text-textSubTitle text-sm font-medium">
              Sell
            </button>
          </div>
        </div>
        <div className="pt-6">
          <SmallText extraClass={`uppercase py-2.5 px-6`}>menu</SmallText>
          <div className="mt-1.5">
            <div className="w-full relative cursor-pointer overflow-hidden flex items-center justify-normal gap-3 pl-8 pr-7 py-2.5">
              <FiLayers
                className={`${activeTab === 1 ? "text-secondary" : "text-black dark:text-white"} text-xl`}
              />
              <SmallHeading
                font={`${activeTab === 1 ? "font-semibold" : "font-normal"}`}
                textColor={`${activeTab === 1 ? "text-black" : "text-textParagraph"}`}
              >
                Dashboard
              </SmallHeading>
              {activeTab === 1 && (
                <div className="absolute h-full w-3 -left-1 bg-gradient-to-b from-primary to-secondary rounded-[30px]"></div>
              )}
            </div>
            <div className="w-full relative cursor-pointer overflow-hidden flex items-center justify-normal gap-3 pl-8 pr-7 py-2.5">
              <BiBuildings
                className={`${activeTab === 2 ? "text-secondary" : "text-black dark:text-white"} text-xl`}
              />
              <SmallHeading
                font={`${activeTab === 2 ? "font-semibold" : "font-normal"}`}
                textColor={`${activeTab === 2 ? "text-black" : "text-textParagraph"}`}
              >
                Companies
              </SmallHeading>
              {activeTab === 2 && (
                <div className="absolute h-full w-3 -left-1 bg-gradient-to-b from-primary to-secondary rounded-[30px]"></div>
              )}
            </div>
            <div className="w-full relative cursor-pointer overflow-hidden flex items-center justify-normal gap-3 pl-8 pr-7 py-2.5">
              <IoBriefcaseOutline
                className={`${activeTab === 3 ? "text-secondary" : "text-black dark:text-white"} text-xl`}
              />
              <SmallHeading
                font={`${activeTab === 3 ? "font-semibold" : "font-normal"}`}
                textColor={`${activeTab === 3 ? "text-black" : "text-textParagraph"}`}
              >
                Portfolio
              </SmallHeading>
              {activeTab === 3 && (
                <div className="absolute h-full w-3 -left-1 bg-gradient-to-b from-primary to-secondary rounded-[30px]"></div>
              )}
            </div>
          </div>
        </div>
        <div className="pt-6">
          <SmallText extraClass={`uppercase py-2.5 px-6`}>general</SmallText>
          <div className="mt-1.5">
            <div className="w-full relative cursor-pointer overflow-hidden flex items-center justify-normal gap-3 pl-8 pr-7 py-2.5">
              <MdOutlineSettings
                className={`${activeTab === 4 ? "text-secondary" : "text-black dark:text-white"} text-xl`}
              />
              <SmallHeading
                font={`${activeTab === 4 ? "font-semibold" : "font-normal"}`}
                textColor={`${activeTab === 4 ? "text-black" : "text-textParagraph"}`}
              >
                Settings
              </SmallHeading>
              {activeTab === 4 && (
                <div className="absolute h-full w-3 -left-1 bg-gradient-to-b from-primary to-secondary rounded-[30px]"></div>
              )}
            </div>
            <div className="w-full relative cursor-pointer overflow-hidden flex items-center justify-normal gap-3 pl-8 pr-7 py-2.5">
              <BiBuoy
                className={`${activeTab === 5 ? "text-secondary" : "text-black dark:text-white"} text-xl`}
              />
              <SmallHeading
                font={`${activeTab === 5 ? "font-semibold" : "font-normal"}`}
                textColor={`${activeTab === 5 ? "text-black" : "text-textParagraph"}`}
              >
                Support
              </SmallHeading>
              {activeTab === 5 && (
                <div className="absolute h-full w-3 -left-1 bg-gradient-to-b from-primary to-secondary rounded-[30px]"></div>
              )}
            </div>
            <div className="w-full relative cursor-pointer overflow-hidden flex items-center justify-normal gap-3 pl-8 pr-7 py-2.5">
              <TbLogout2
                className={`${activeTab === 6 ? "text-secondary" : "text-black dark:text-white"} text-xl`}
              />
              <SmallHeading
                font={`${activeTab === 6 ? "font-semibold" : "font-normal"}`}
                textColor={`${activeTab === 6 ? "text-black" : "text-textParagraph"}`}
              >
                Logout
              </SmallHeading>
              {activeTab === 6 && (
                <div className="absolute h-full w-3 -left-1 bg-gradient-to-b from-primary to-secondary rounded-[30px]"></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden ${sidebarIsOpen ? "sm:hidden" : "sm:block fixed"} w-[10%] h-screen overflow-y-scroll tab:hidden bg-gray-50 rounded-md`}
      >
        <img
          src={RightIndent}
          alt="menu"
          className="m-auto mt-3"
          onClick={() => setSidebarIsOpen(true)}
        />
        <div className="px-1 pt-1.5  mt-5">
          <div
            className={`${activeTab == 1 ? "bg-gradient-to-b from-primary to-secondary" : "bg-transparent"} rounded-md p-3`}
          >
            <FiLayers
              className={`text-xl m-auto ${activeTab == 1 ? "text-white" : "text-textHeading"}`}
            />
          </div>
          <div
            className={`${activeTab == 2 ? "bg-gradient-to-b from-primary to-secondary" : "bg-transparent"} rounded-md p-3`}
          >
            <BiBuildings
              className={`text-xl m-auto ${activeTab == 2 ? "text-white" : "text-textHeading"}`}
            />
          </div>
          <div
            className={`${activeTab == 3 ? "bg-gradient-to-b from-primary to-secondary" : "bg-transparent"} rounded-md p-3`}
          >
            <IoBriefcaseOutline
              className={`text-xl m-auto ${activeTab == 3 ? "text-white" : "text-textHeading"}`}
            />
          </div>
          <div
            className={`${activeTab == 4 ? "bg-gradient-to-b from-primary to-secondary" : "bg-transparent"} rounded-md p-3`}
          >
            <MdOutlineSettings
              className={`text-xl m-auto ${activeTab == 4 ? "text-white" : "text-textHeading"}`}
            />
          </div>
          <div
            className={`${activeTab == 5 ? "bg-gradient-to-b from-primary to-secondary" : "bg-transparent"} rounded-md p-3`}
          >
            <BiBuoy
              className={`text-xl m-auto ${activeTab == 5 ? "text-white" : "text-textHeading"}`}
            />
          </div>
          <div
            className={`${activeTab == 5 ? "bg-gradient-to-b from-primary to-secondary" : "bg-transparent"} rounded-md p-3`}
          >
            <TbLogout2
              className={`text-xl m-auto ${activeTab == 5 ? "text-white" : "text-textHeading"}`}
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:block sm:w-[10%] tab:w-1/5"></div>
      <div className="w-full px-4 tab:w-4/5">
        <div className="w-full rounded-md bg-gray-50 sm:px-5 py-2.5 flex justify-between items-center">
          <div className="hidden sm:block relative rounded-full">
            <input
              type="text"
              name="search"
              placeholder="Hinted Search Text"
              className="px-7 py-3 rounded-full w-72"
            />
            <BiSearch className="absolute right-3 top-[35%] cursor-pointer text-xl" />
          </div>
          <div className="flex items-center justify-normal gap-3">
            <div className="p-4">
              <Bell className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-normal gap-3">
              <img
                src={Profile}
                alt="profile image"
                className="w-14 h-14 rounded-full"
              />
              <div className="hidden sm:block">
                <SmallHeading>Shahriar Zaman</SmallHeading>
                <SmallText title={`shahriarpranto.oscorp@gmail.com`}>
                  {shortEmail("shahriarpranto.oscorp@gmail.com")}
                </SmallText>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sm:hidden fixed top-0 left-0 w-full rounded-md bg-gray-50 px-3 sm:px-5 py-2.5 flex justify-between items-center`}
        >
          <img
            src={RightIndent}
            alt="menu"
            className=""
            onClick={() => setSidebarIsOpen(true)}
          />
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={() => navigate(`/`)}
              className="flex items-center justify-center gap-2"
            >
              <img src={LogoDark} alt="logo" className="hidden dark:block" />
              <img src={LogoLight} alt="logo" className="dark:hidden" />
              <img
                src={InvestmentDark}
                alt="logo"
                className="hidden dark:block"
              />
              <img src={Investment} alt="logo" className="dark:hidden" />
            </div>
          </div>
          <div className="flex items-center justify-normal gap-3">
            <div className="p-4">
              <Bell className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-normal gap-3">
              <img
                src={Profile}
                alt="profile image"
                className="w-14 h-14 rounded-full"
              />
              <div className="hidden sm:block">
                <SmallHeading>Shahriar Zaman</SmallHeading>
                <SmallText title={`shahriarpranto.oscorp@gmail.com`}>
                  {shortEmail("shahriarpranto.oscorp@gmail.com")}
                </SmallText>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
