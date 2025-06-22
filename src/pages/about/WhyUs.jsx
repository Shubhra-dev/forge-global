import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
function WhyUs() {
  return (
    <SectionLayout>
      <SmallHeading extraClass={`tracking-wider uppercase`}>
        Why us
      </SmallHeading>
      <div className="mt-3 tab:mt-5 w-full flex flex-col tab:flex-row items-start justify-between gap-8 tab:gap-14">
        <Title
          fontWeight={`font-medium`}
          align={`text-left`}
          extraClass={`w-full tab:w-1/2`}
        >
          We Always Put{" "}
          <span className="text-primary font-semibold">Your Interests</span>{" "}
          First
        </Title>
        <Text extraClass={`w-full tab:w-1/2`}>
          Driven by a relentless focus on “why,” we integrate our services to
          uncover, design, and deliver the most impactful outcomes for you.
          Instead of relying on predefined processes, we take a hands-on
          approach—collaborating closely with your teams to craft practical,
          end-to-end solutions tailored to your needs.
        </Text>
      </div>
    </SectionLayout>
  );
}

export default WhyUs;
