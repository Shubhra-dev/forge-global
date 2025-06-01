import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import Logo from "../../assets/icons/Logo-1.svg";
import Text from "../../components/Text";
import Title from "../../components/Title";
function JoinMarketPlace() {
  return (
    <SectionLayout bg={`bg-secondary2`} bgDark={`dark:bg-secondary2`}>
      <SubTitle align={`text-center`} textColorDark={" "}>
        Join the secondary marketplace for institutional investors
      </SubTitle>
      <div className="py-10 w-11/12 m-auto flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-between">
        <div className="flex items-center gap-2.5 w-full sm:w-[31%]">
          <img src={Logo} alt="logo" />
          <Text textColor={`text-textHeading`} textColorDark=" ">
            Seek potentially outsized returns with same day private market data
          </Text>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-[31%]">
          <img src={Logo} alt="logo" />
          <Text textColor={`text-textHeading`} textColorDark=" ">
            Seek potentially outsized returns with same day private market data
          </Text>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-[31%]">
          <img src={Logo} alt="logo" />
          <Text textColor={`text-textHeading`} textColorDark=" ">
            Manage complex portfolios on Forge's comprehensive investment
            platform
          </Text>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="bg-[#FBD22C] p-10 h-auto sm:h-48 tab:h-44 sm:rounded-l-[40px] w-full sm:w-1/3">
          <Title textColorDark={" "}>$15.3B</Title>
          <Text textColorDark={" "} align={`text-center`} extraClass={`pt-2`}>
            Transaction volume
          </Text>
        </div>
        <div className="bg-[#FBD22C] p-10 h-auto sm:h-48 tab:h-44 w-full sm:w-1/3">
          <Title textColorDark={" "}>27K</Title>
          <Text textColorDark={" "} align={`text-center`} extraClass={`pt-2`}>
            Trades completed on Forge's platform
          </Text>
        </div>
        <div className="bg-[#FBD22C] p-10 h-auto sm:h-48 tab:h-44 sm:rounded-r-[40px] w-full sm:w-1/3">
          <Title textColorDark={" "}>600+</Title>
          <Text textColorDark={" "} align={`text-center`} extraClass={`pt-2`}>
            Private companies traded
          </Text>
        </div>
      </div>
    </SectionLayout>
  );
}

export default JoinMarketPlace;
