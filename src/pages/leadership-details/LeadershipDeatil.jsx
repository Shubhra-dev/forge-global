import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Mail from "../../assets/icons/Mail.svg";
import LinkedIn from "../../assets/icons/LinkedInLight.svg";
import LinkedInDark from "../../assets/icons/LinkedInDark.svg";
import X from "../../assets/icons/XLight.svg";
import XDark from "../../assets/icons/XDark.svg";
import ExtraSmallText from "../../components/ExtraSmallText";
import SmallText from "../../components/SmallText";
import CEOSmall from "../../assets/CEOSmall.png";
import SmallHeading from "../../components/SmallHeading";
function LeadershipDeatil() {
  return (
    <>
      <SectionLayout
        padding={`pb-12 pt-[100px] sm:pb-16 sm:pt-[120px] tab:pb-24 tab:pt-[160px]`}
      >
        <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="w-full sm:w-[60%] tab:w-[55%]">
            <Title align={`text-left`}>
              Kelly <span className="font-medium">Rodriques</span>
            </Title>
            <Text extraClass={`uppercase tracking-widest pt-2.5`}>
              Chief Executive Officer
            </Text>
            <div className="py-8">
              <Text
                textColor={`text-textHeading`}
                textColorDark={`text-textHeadingDark`}
              >
                “Like all Finovate team members, I work each day to advance our
                vision toward a world where everyone can love their life and
                work. Our commitment to Slalom’s vision-led, purpose-driven,
                values-based culture has earned us a consistent reputation as
                one of the best workplaces.”
              </Text>
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="bg-primary p-2.5 rounded-full">
                <img src={Mail} alt="mail" />
              </div>
              <div>
                <ExtraSmallText>Email Address</ExtraSmallText>
                <SmallText>kelly.rodriques@investment.com</SmallText>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[30%] tab:w-1/4 dark:bg-backgroundDark rounded-md ">
            <div className="py-5 px-2.5">
              <img
                src={CEOSmall}
                alt="avatar"
                className="w-48 h-48 rounded-full object-cover object-center m-auto dark:bg-backgroundPrimaryDark"
              />
            </div>
            <div className="flex items-center justify-center gap-4 p-[15px] border-t-2 dark:border-t-backgroundPrimaryDark">
              <div className=" cursor-pointer p-2.5 dark:hidden rounded-full">
                <img src={LinkedIn} alt="logo social" />
              </div>
              <div className=" cursor-pointer p-2.5 dark:hidden rounded-full">
                <img src={X} alt="logo social" />
              </div>
              <div className="cursor-pointer p-2.5 hidden dark:block dark:bg-backgroundPrimaryDark rounded-full">
                <img src={LinkedInDark} alt="logo social" />
              </div>
              <div className="cursor-pointer p-2.5 hidden dark:block dark:bg-backgroundPrimaryDark rounded-full">
                <img src={XDark} alt="logo social" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-b-2">
          <SmallHeading
            extraClass={`uppercase tracking-widest pb-5`}
            fontWeight={`font-medium`}
          >
            expertise
          </SmallHeading>
        </div>
        <div className="mt-10 mb-16 flex items-center justify-between flex-wrap space-y-3">
          <Text
            textColor={`text-textHeading`}
            extraClass={`px-5 py-2.5 dark:bg-backgroundPrimaryDark rounded-md`}
          >
            Financial Planning
          </Text>
          <Text
            textColor={`text-textHeading`}
            extraClass={`px-5 py-2.5 dark:bg-backgroundPrimaryDark rounded-md`}
          >
            Investment Management
          </Text>
          <Text
            textColor={`text-textHeading`}
            extraClass={`px-5 py-2.5 dark:bg-backgroundPrimaryDark rounded-md`}
          >
            Insurance & Risk Management
          </Text>
          <Text
            textColor={`text-textHeading`}
            extraClass={`px-5 py-2.5 dark:bg-backgroundPrimaryDark rounded-md`}
          >
            Alternative Investment
          </Text>
        </div>
        <div className="tab:w-[60%] m-auto">
          <SmallHeading fontWeight={`font-normal`} align={`text-justify`}>
            John is the Worldwide Managing Partner, CEO, and Chairman of the
            Board of Directors at Finovate, where he oversees global strategy
            and operations while preserving Bain’s renowned culture. With over
            20 years at the firm, John has advised global CEOs and is a
            recognized expert in deal advisory and value creation for portfolio
            companies. He has a strong background in private equity, corporate
            mergers and acquisitions, and consumer products. John is also
            involved in sustainability initiatives and serves on the Board of
            Directors of Cancer, a non-profit focused on fighting pediatric
            cancer. He holds master’s degrees in civil engineering and
            multilingual business communication from the University of Ghent and
            is based in New York.
          </SmallHeading>
        </div>
      </SectionLayout>
    </>
  );
}

export default LeadershipDeatil;
