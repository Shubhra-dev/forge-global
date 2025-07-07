import { useNavigate } from "react-router-dom";
import RegSideBg from "../../assets/RegSideBg.jpg";
import LogoDark from "../../assets/icons/Logo.svg";
import LogoLight from "../../assets/icons/LogoLight.svg";
import Investment from "../../assets/icons/TextInvestment.svg";
import InvestmentDark from "../../assets/icons/TextInvestmentDark.svg";
import { useState } from "react";
import AgeGroup from "./AgeGroup";
import InvestingFor from "./InvestingFor";
import PreTaxIncome from "./PreTaxIncome";
import LiquidNetWorth from "./LiquidNetWorth";
import IncomeSources from "./IncomeSources";
import Familiarity from "./Familiarity";
import AttituteInvesting from "./AttituteInvesting";
import TenPercent from "./TenPercent";
import HowLongInvesting from "./HowLongInvesting";
import AlreadyInvested from "./AlreadyInvested";
const initialState = {
  age_group: "",
  investing_for: "",
  pre_tax_annual_income: "",
  liquid_net_worth: "",
  income_sources: "",
  familiar_investing: "",
  attitude_towards_investing: "",
  if_lost_10_percent_a_year: "",
  duration_time_investing_in_financial: "",
  already_invested_financial_products: [],
};

function ProfileQuestions() {
  const [profileInfo, setProfileInfo] = useState(initialState);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  return (
    <div
      className={`min-h-screen w-full relative dark:bg-backgroundPrimaryDark flex flex-col sm:flex-row items-center justify-normal`}
    >
      <div className={`max-w-content w-full mx-auto`}>
        <div className="sm:hidden h-[65px] w-full shadow-xl flex items-center justify-center border-b border-b-borderPrimary">
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
        <div
          className="hidden sm:block sm:fixed content:absolute left-0 top-0 w-[35%] h-screen bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${RegSideBg})`,
          }}
        >
          <div className="pt-10 pl-8 w-full h-full dark:bg-black/30">
            <div
              onClick={() => navigate(`/`)}
              className="flex items-center justify-normal gap-4 cursor-pointer"
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
        </div>
        <div className="w-full sm:ml-[35%] sm:w-[65%] p-5 tab:p-0 dark:bg-backgroundPrimaryDark">
          {page === 1 && (
            <AgeGroup
              group={profileInfo}
              setGroup={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 2 && (
            <InvestingFor
              investingFor={profileInfo}
              setInvestingFor={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 3 && (
            <PreTaxIncome
              preTaxIncome={profileInfo}
              setPreTaxIncome={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 4 && (
            <LiquidNetWorth
              liquidNetWorth={profileInfo}
              setLiquidNetWorth={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 5 && (
            <IncomeSources
              incomeSources={profileInfo}
              setIncomeSources={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 6 && (
            <Familiarity
              familiarity={profileInfo}
              setFamiliarity={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 7 && (
            <AttituteInvesting
              attitude={profileInfo}
              setAttitude={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 8 && (
            <TenPercent
              whatToDo={profileInfo}
              setWhatToDo={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 9 && (
            <HowLongInvesting
              length={profileInfo}
              setLength={setProfileInfo}
              setPage={setPage}
            />
          )}
          {page === 10 && (
            <AlreadyInvested
              invested={profileInfo}
              setInvested={setProfileInfo}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileQuestions;
