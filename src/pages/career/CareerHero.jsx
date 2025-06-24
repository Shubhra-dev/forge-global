import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import CareerHeroImg from "../../assets/CareerHero.png";
import Text from "../../components/Text";
import BigText from "../../components/BigText";
function CareerHero() {
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
            Get an Inside Look at{" "}
            <span className="font-semibold text-primary">
              Our <br />
              Culture
            </span>{" "}
            and Team
          </Title>
        </div>
        <div
          className="w-full bg-cover bg-center bg-no-repeat rounded-[40px] my-[45px]"
          style={{ backgroundImage: `url(${CareerHeroImg})` }}
        >
          <div className="m-auto max-w-content">
            <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto h-[350px] flex items-center justify-normal"></div>
          </div>
        </div>
        <div className="mt-3 tab:mt-5 w-full flex flex-col tab:flex-row items-center justify-between gap-6 tab:gap-10">
          <div className="w-full tab:w-[40%]">
            <Title fontWeight={`font-medium`} align={`text-left`}>
              Our people are our{" "}
              <span className="text-primary font-semibold">power</span>
            </Title>
          </div>
          <div className="w-full tab:w-[60%]">
            <BigText fontWeight={`font-normal`}>
              If you have lofty goals, towering aspirations, and a desire to
              revolutionize the industry, then Forge wants you.
            </BigText>
            <Text extraClass={`pt-5`}>
              Our team is made up of seasoned business professionals with
              extensive experience in entrepreneurship, finance, analytics,
              strategy, and consulting. We are dedicated to leveraging our
              knowledge and skills to support and guide aspiring entrepreneurs,
              helping them navigate challenges and achieve success.
            </Text>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default CareerHero;
