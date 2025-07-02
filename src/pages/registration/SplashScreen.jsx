import SplashScreenImg from "../../assets/SplashScreen.png";
import Title from "../../components/Title";
import BigText from "../../components/BigText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import ShadowButton from "../../components/ShadowButton";
import { useNavigate } from "react-router-dom";
function SplashScreen() {
  const navigate = useNavigate();
  return (
    <div
      className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 mx-auto py-12 sm:py-16 tab:py-24`}
    >
      <div className="w-full flex flex-col tab:flex-row items-center justify-center gap-14">
        <div className="w-full tab:w-1/2">
          <img src={SplashScreenImg} alt="side bg" className="m-auto tab:m-0" />
        </div>
        <div className="w-full tab:w-1/2">
          <Title font={`font-cursive`} align={`text-center tab:text-left`}>
            Congratulations !
          </Title>
          <BigText align={`text-center tab:text-left`}>
            Your profile created successfully.
          </BigText>
          <div className="pt-5">
            <SubTitle
              align={`text-center tab:text-left`}
              font={`font-clash`}
              leading={"leading-normal"}
            >
              Let’s personalize your investor profile
            </SubTitle>
            <Text align={`text-center tab:text-left`} extraClass={`pt-[5px]`}>
              To offer you the most relevant financial options, we need to
              understand your experience and goals. <br />
              It takes just a couple of minutes — and everything stays secure
              and confidential. So, no pressure — just honest answers to help
              you get the best out of our platform.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
