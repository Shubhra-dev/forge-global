import PrimaryButton from "../../components/PrimaryButton";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import ArrowRightUp from "../../assets/icons/ArrowRightUp.svg";
function WhyForge() {
  return (
    <SectionLayout id={`why-forge`}>
      <div className="flex flex-col sm:flex-row items-start justify-normal gap-8 sm:gap-16 tab:gap-24">
        <div className="w-full sm:w-[50%] tab:w-[40%]">
          <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
            Forge is your trusted partner to buy and sell “Company” stock
          </SubTitle>
          <Text extraClass={`py-5`}>
            Forge is the trusted platform for buying and selling private company
            stock. Investors and shareholders worldwide rely on our deep data
            insights, liquidity solutions, and tailored investment opportunities
            to navigate the private market. Register to get started.
          </Text>
          <PrimaryButton>Register</PrimaryButton>
        </div>
        <div>
          <Text
            fontWeight={`font-bold`}
            textColor={`text-textHeading`}
            textColorDark={`text-textHeadingDark`}
          >
            First time buying private market stock?
          </Text>
          <div className="pt-3 pb-2 flex items-center justify-normal gap-2">
            <img src={ArrowRightUp} alt="arrow right up" />
            <Text>Secondary marketplace explained</Text>
          </div>
          <div className="pb-2 flex items-center justify-normal gap-2">
            <img src={ArrowRightUp} alt="arrow right up" />
            <Text>Secondary marketplace explained</Text>
          </div>
          <div className="pb-3 flex items-center justify-normal gap-2">
            <img src={ArrowRightUp} alt="arrow right up" />
            <Text>Secondary marketplace explained</Text>
          </div>
          <Text
            fontWeight={`font-bold`}
            textColor={`text-textHeading`}
            textColorDark={`text-textHeadingDark`}
            extraClass={`pt-7`}
          >
            New to selling your private company stock?
          </Text>
          <div className="pt-3 pb-2 flex items-center justify-normal gap-2">
            <img src={ArrowRightUp} alt="arrow right up" />
            <Text>Secondary marketplace explained</Text>
          </div>
          <div className="pb-2 flex items-center justify-normal gap-2">
            <img src={ArrowRightUp} alt="arrow right up" />
            <Text>Secondary marketplace explained</Text>
          </div>
          <div className="pb-3 flex items-center justify-normal gap-2">
            <img src={ArrowRightUp} alt="arrow right up" />
            <Text>Secondary marketplace explained</Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default WhyForge;
