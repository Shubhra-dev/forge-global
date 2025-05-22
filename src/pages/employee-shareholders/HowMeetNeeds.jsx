import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import PhotoCardWithButton from "../../components/PhotoCardWithButton";
import People from "../../assets/People.png";
import People2 from "../../assets/People2.png";
import People3 from "../../assets/People3.png";
import SectionLayout from "../../ui/SectionLayout";
function HowMeetNeeds() {
  return (
    <SectionLayout bg={`bg-gray-100`} bgDark={`dark:bg-backgroundDark/90`}>
      <SubTitle align={`text-left`}>
        How can the private market help meet your needs?
      </SubTitle>
      <SmallHeading
        fontWeight={`font-normal`}
        extraClass={`pt-5 pb-10 w-11/12`}
      >
        Whether you’re ready to sell shares, considering diversifying your
        portfolio or simply want to learn more about the private market, Forge
        clears a path to help you reach your investment goals.
      </SmallHeading>
      <div className="flex flex-wrap items-center justify-between gap-5 tab:gap-0">
        <PhotoCardWithButton
          image={People}
          text={`Partner with a Forge Private Market Specialist to learn about the
            private market and how to navigate the transaction process.`}
          title={`Build confidence`}
        />
        <PhotoCardWithButton
          image={People2}
          text={`Explore potential funding for life’s big moments — whether it’s purchasing a home, paying for tuition or covering unexpected expenses.`}
          title={`Be prepared`}
        />
        <PhotoCardWithButton
          image={People3}
          text={`Consider broadening your investment portfolio by selling a portion of your private company shares to mitigate the risk associated with concentration in a single asset.`}
          title={`Branch out`}
        />
      </div>
    </SectionLayout>
  );
}

export default HowMeetNeeds;
