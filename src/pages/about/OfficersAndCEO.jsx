import Text from "../../components/Text";
import Title from "../../components/Title";
import CEOImage from "../../assets/CEO.png";
import CFO from "../../assets/CFO.jpg";
import CGO from "../../assets/CGO.jpg";
import CTO from "../../assets/CTO.jpg";
import Heading from "../../components/Heading";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import OfficerCard from "./OfficerCard";
function OfficersAndCEO() {
  return (
    <>
      <div className={`w-full bg-white dark:bg-backgroundDarkGeneral`}>
        <div className={`max-w-content m-auto`}>
          <div
            className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-12 sm:pt-16 tab:pt-24 pb-10 flex flex-col sm:flex-row items-center justify-between gap-6`}
          >
            <div className="w-full sm:w-1/2">
              <Title fontWeight={`font-medium`} align={`text-left`}>
                <span className="text-primary">Forge</span> leadership in action
              </Title>
            </div>
            <div className="w-full sm:w-1/2">
              <Text>
                Get to know the people spearheading access to the private
                market.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-white dark:bg-backgroundDarkGeneral`}>
        <div
          style={{ backgroundImage: `url(${CEOImage})` }}
          className={`max-w-content m-auto bg-transparent h-[650px] bg-center bg-cover rounded-[40px]`}
        >
          <div
            className={`px-5 bg-transparent h-full smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-5 sm:py-16 tab:py-24 flex items-end justify-normal`}
          >
            <div className="p-4 sm:p-6 tab:p-10 bg-white rounded-md w-[70%] sm:w-[45%] tab:w-[40%]">
              <Heading
                textColorDark={` `}
                align={`text-left`}
                font={`font-clash`}
              >
                Kelly <span className="font-medium">Rodriques</span>
              </Heading>
              <SubTitle
                textColorDark={` `}
                fontWeight={`font-medium`}
                extraClass={`pt-1 pb-5`}
              >
                Forge CEO
              </SubTitle>
              <Text textColorDark={` `}>
                Our story begins in 1950, when Kelly Rodriques founded our
                third-generation financial planning firm
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-white dark:bg-backgroundPrimaryDark`}>
        <div className={`max-w-content m-auto`}>
          <div
            className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto pt-10 pb-12 sm:pb-16 tab:pb-24`}
          >
            <div className="w-full flex flex-col sm:flex-row items-stretch justify-between gap-5">
              <OfficerCard
                image={CTO}
                designation={`Chief Technology Officer`}
                firstname={`Vidya`}
                lastName={`Eashwer`}
                text={`18+ years creating and executing innovative fintech technology strategy; former Head of Technology, Edge Systems, at Intercontinental Exchange, and Managing Director of IT at the New York Stock Exchange managing international teams.`}
              />
              <OfficerCard
                image={CFO}
                designation={`Chief Financial Officer`}
                firstname={`James`}
                lastName={`Nevin`}
                text={`25+ years of financial and capital markets experience, including most recently at the LSEG. He spent over a decade at LSEG in roles including Managing Director of the Funds, Research and Content business lines, Managing Director and Head of Data Solutions, and CFO and Managing Director of the Information Services division.`}
              />
              <OfficerCard
                image={CGO}
                designation={`Chief Growth Officer`}
                firstname={`Jennifer`}
                lastName={`Phillips`}
                text={`20 years scaling tech in the secondary markets space; former President of SharesPost Financial Corp., additional roles Silver Lake Waterman, New Evolution Ventures, Jefferies & Co. and Merrill Lynch.`}
              />
            </div>
            <div className="pt-10 w-max m-auto">
              <PrimaryButton padding={`px-20 py-3`}>
                Meet the Team
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficersAndCEO;
