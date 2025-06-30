import { useNavigate } from "react-router-dom";
import LoginSideBg from "../../assets/LoginSideBg.jpg";
import LogoDark from "../../assets/icons/Logo.svg";
import LogoLight from "../../assets/icons/LogoLight.svg";
import Investment from "../../assets/icons/TextInvestment.svg";
import InvestmentDark from "../../assets/icons/TextInvestmentDark.svg";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Input from "../registration/Input";
import SmallText from "../../components/SmallText";
import ShadowButton from "../../components/ShadowButton";
import PasswordInput from "../registration/PasswordInput";

function Login() {
  const navigate = useNavigate();
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
        <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
          <Text fontWeight={`font-medium`}>
            Not a member?{" "}
            <span className="text-blue-700 underline cursor-pointer">
              Register
            </span>
          </Text>
          <SubTitle font={`font-clash`} extraClass={`mt-1.`}>
            Log-in To Your Account
          </SubTitle>
          <div className="my-6 w-full">
            <form className="w-full">
              <div className="w-full">
                <Input
                  width={`w-full`}
                  type={`email`}
                  label={`Email Address`}
                  placeholder={`example@gmail.com`}
                />
              </div>
              <div className="mt-5">
                <PasswordInput
                  width={`w-full`}
                  label={`Password`}
                  placeholder={`Enter your password`}
                />
                <div className="w-full flex items-center justify-end cursor-pointer">
                  <SmallText
                    textColor={`text-blue-700`}
                    textColorDark={` `}
                    extraClass={`pt-1 hover:underline`}
                  >
                    Forgot Password?
                  </SmallText>
                </div>
              </div>
              <div className="mt-5">
                <ShadowButton
                  text={`Log In`}
                  bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
                  type={`submit`}
                  rounded={`rounded-md`}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
