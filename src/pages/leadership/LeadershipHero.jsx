import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import LeadershipImg from "../../assets/Leadership.png";
import Text from "../../components/Text";
function LeadershipHero() {
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
            A <span className="text-primary">Culture</span> Built on
            <br />
            Collaboration and Passion
          </Title>
        </div>
        <div
          className="w-full bg-cover bg-center bg-no-repeat rounded-[40px] my-[45px]"
          style={{ backgroundImage: `url(${LeadershipImg})` }}
        >
          <div className="m-auto max-w-content">
            <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto h-[350px] flex items-center justify-normal"></div>
          </div>
        </div>
        <div className="mt-3 tab:mt-5 w-full flex flex-col tab:flex-row items-start justify-between gap-8 tab:gap-14">
          <div className="w-full tab:w-1/2">
            <Title fontWeight={`font-medium`} align={`text-left`}>
              <span className="text-primary font-semibold">Empowering</span>{" "}
              with Expertise & Experience
            </Title>
          </div>
          <Text extraClass={`w-full tab:w-1/2`}>
            Our team is made up of seasoned business professionals with
            extensive experience in entrepreneurship, finance, analytics,
            strategy, and consulting. We are dedicated to leveraging our
            knowledge and skills to support and guide aspiring entrepreneurs,
            helping them navigate challenges and achieve success.
          </Text>
        </div>
      </SectionLayout>
    </>
  );
}

export default LeadershipHero;
