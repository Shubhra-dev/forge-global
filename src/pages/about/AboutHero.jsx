import Title from "../../components/Title";
import SmallHeading from "../../components/SmallHeading";
import SectionLayout from "../../ui/SectionLayout";
import AboutHeroImg from "../../assets/AboutHero.png";
import Heading from "../../components/Heading";
import SmallText from "../../components/SmallText";
function AboutHero() {
  return (
    <>
      <SectionLayout
        padding={`pt-24 pb-12 sm:pt-16 sm:pb-16 tab:pt-32 tab:pb-14`}
      >
        <div className="w-full">
          <Title
            fontWeight={`font-medium`}
            align={`text-center sm:text-left`}
            font={`font-clash`}
          >
            Opening the doors to the
          </Title>
          <Heading
            font={`font-clash`}
            align={`text-center sm:text-left`}
            textColor={`text-primary`}
            textColorDark={` `}
            extraClass={`pt-2 tab:pt-0`}
          >
            private market
          </Heading>
        </div>
        <div
          className="w-full bg-cover bg-center bg-no-repeat rounded-[40px] my-[45px]"
          style={{ backgroundImage: `url(${AboutHeroImg})` }}
        >
          <div className="m-auto max-w-content">
            <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto h-[350px] flex items-center justify-normal"></div>
          </div>
        </div>
        <div className="w-full sm:w-[80%] sm:m-auto tab:w-full flex flex-wrap tab:flex-nowrap items-center justify-normal gap-5">
          <div className="w-[47%] tab:w-1/4 px-5 py-2.5 border-l border-l-borderPrimary">
            <Heading
              align={`text-left`}
              font={`font-clash`}
              textColor={`text-primary`}
              textColorDark={` `}
              extraClass={`px-[15px] py-2.5`}
            >
              $
              <span className="text-textHeading dark:text-textHeadingDark">
                28.90
              </span>
              M
            </Heading>
            <SmallText textColor={`text-[#697386]`}>
              Assets under management
            </SmallText>
          </div>
          <div className="w-[47%] tab:w-1/4 px-5 py-2.5 border-l border-l-borderPrimary">
            <Heading
              align={`text-left`}
              font={`font-clash`}
              textColor={`text-primary`}
              textColorDark={` `}
              extraClass={`px-[15px] py-2.5`}
            >
              $
              <span className="text-textHeading dark:text-textHeadingDark">
                6
              </span>
              B
            </Heading>
            <SmallText textColor={`text-[#697386]`}>
              Saved for clients annually
            </SmallText>
          </div>
          <div className="w-[47%] tab:w-1/4 px-5 py-2.5 border-l border-l-borderPrimary">
            <Heading
              align={`text-left`}
              font={`font-clash`}
              textColor={`text-primary`}
              textColorDark={` `}
              extraClass={`px-[15px] py-2.5`}
            >
              <span className="text-textHeading dark:text-textHeadingDark">
                90
              </span>
              %
            </Heading>
            <SmallText textColor={`text-[#697386]`}>
              Repeat clients or referrals
            </SmallText>
          </div>
          <div className="w-[47%] tab:w-1/4 px-5 py-2.5 border-l border-l-borderPrimary">
            <Heading
              align={`text-left`}
              font={`font-clash`}
              textColor={`text-primary`}
              textColorDark={` `}
              extraClass={`px-[15px] py-2.5`}
            >
              <span className="text-textHeading dark:text-textHeadingDark">
                120
              </span>
              +
            </Heading>
            <SmallText textColor={`text-[#697386]`}>Professionals</SmallText>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default AboutHero;
