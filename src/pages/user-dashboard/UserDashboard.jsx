import { useNavigate } from "react-router-dom";
import LogoDark from "../../assets/icons/Logo.svg";
import LogoLight from "../../assets/icons/LogoLight.svg";
import Investment from "../../assets/icons/TextInvestment.svg";
import InvestmentDark from "../../assets/icons/TextInvestmentDark.svg";
import BigText from "../../components/BigText";
import ExtraSmallText from "../../components/ExtraSmallText";
import SmallText from "../../components/SmallText";
import { FiLayers } from "react-icons/fi";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import { BiBuildings, BiBuoy, BiSearch } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { Bell } from "lucide-react";
import Profile from "../../assets/Profile.jpg";
import Logo7 from "../../assets/icons/Logo-7.svg";
function UserDashboard() {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const shortEmail = (email) =>
    email.length > 15 ? email.slice(0, 20) + ".." : email;

  return (
    <div className="bg-white w-full my-5 max-w-content relative flex items-start justify-normal gap-5">
      <div className="fixed top-5 rounded-md bg-gray-50 w-1/5 h-screen no-scrollbar overflow-y-scroll p-2.5 pb-10">
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
      <div className="w-1/5"></div>
      <div className="w-4/5">
        <div className="w-full rounded-md bg-gray-50 px-5 py-2.5 flex justify-between items-center">
          <div className="relative rounded-full">
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
              <div>
                <SmallHeading>Shahriar Zaman</SmallHeading>
                <SmallText title={`shahriarpranto.oscorp@gmail.com`}>
                  {shortEmail("shahriarpranto.oscorp@gmail.com")}
                </SmallText>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-md bg-gray-50 px-5 py-2.5">
          <BigText>Direct Investment Opportunities</BigText>
          <ExtraSmallText fontWeight={`font-normal pt-1`}>
            If you are interested in investing in companies not listed below,
            please visit Companies or contact your Private Market Specialist.
          </ExtraSmallText>
          <div className="mt-6 grid grid-cols-3">
            <div className="p-5 rounded-md border border-borderPrimary">
              <div className="flex items-center justify-normal gap-5">
                <img
                  src={Logo7}
                  alt="boston logo"
                  className="w-9 h-9 object-cover object-center"
                />
                <SmallHeading>Boston Metal</SmallHeading>
              </div>
              <div className="my-5">
                <div className="flex items-center justify-between">
                  <ExtraSmallText>Price Per Share</ExtraSmallText>
                  <SmallText
                    textColor={`text-textHeading`}
                    font={`font-semibold`}
                  >
                    $4.90
                  </SmallText>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <ExtraSmallText>Security Type</ExtraSmallText>
                </div>
                <div className="my-[5px] border-b border-b-borderPrimary"></div>
                <div className="flex items-center justify-between">
                  <ExtraSmallText>Last Round Price Per Share</ExtraSmallText>
                  <ExtraSmallText
                    textColor={`text-textHeading`}
                    font={`font-semibold`}
                  >
                    $9.51
                  </ExtraSmallText>
                </div>
                <div className="flex items-center justify-between my-[5px]">
                  <ExtraSmallText>Last Round Date</ExtraSmallText>
                  <ExtraSmallText
                    textColor={`text-textHeading`}
                    font={`font-semibold`}
                  >
                    Jan 2024
                  </ExtraSmallText>
                </div>
                <div className="flex items-center justify-between">
                  <ExtraSmallText>Last Round Valuation</ExtraSmallText>
                  <ExtraSmallText
                    textColor={`text-textHeading`}
                    font={`font-semibold`}
                  >
                    $779.04MM
                  </ExtraSmallText>
                </div>
              </div>
              <div className="w-full cursor-pointer px-3 py-2 rounded-[5px] shadow-[inset_0px_-5px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-0.50px] outline-borderPrimary hover:bg-secondary2 transition-all duration-500 inline-flex justify-center items-center gap-2">
                <div class="text-center uppercase justify-start text-primary text-xs font-bold leading-none">
                  indicate interest
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
