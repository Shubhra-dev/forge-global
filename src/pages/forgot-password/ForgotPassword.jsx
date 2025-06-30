import { useNavigate } from "react-router-dom";
import LoginSideBg from "../../assets/LoginSideBg.jpg";
import LogoDark from "../../assets/icons/Logo.svg";
import LogoLight from "../../assets/icons/LogoLight.svg";
import Investment from "../../assets/icons/TextInvestment.svg";
import InvestmentDark from "../../assets/icons/TextInvestmentDark.svg";
import { useState } from "react";
import ForgotForm from "./ForgotForm";
import TwoStepVerification from "./TwoStepVerification";

function ForgotPassword() {
  const navigate = useNavigate();
  const [page, setPage] = useState(2);
  return (
    <div className="min-h-screen relative max-w-content m-auto dark:bg-backgroundPrimaryDark flex flex-col sm:flex-row items-center justify-normal">
      <div className="sm:hidden h-[65px] w-full shadow-xl flex items-center justify-center border-b border-b-borderPrimary">
        <div
          onClick={() => navigate(`/`)}
          className="flex items-center justify-center gap-2"
        >
          <img src={LogoDark} alt="logo" className="hidden dark:block" />
          <img src={LogoLight} alt="logo" className="dark:hidden" />
          <img src={InvestmentDark} alt="logo" className="hidden dark:block" />
          <img src={Investment} alt="logo" className="dark:hidden" />
        </div>
      </div>
      <div
        className="hidden sm:block sm:fixed content:absolute left-0 top-0 w-[35%] h-screen bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${LoginSideBg})`,
        }}
      >
        {" "}
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
        {page === 1 && <ForgotForm />}
        {page === 2 && <TwoStepVerification />}
      </div>
    </div>
  );
}

export default ForgotPassword;
