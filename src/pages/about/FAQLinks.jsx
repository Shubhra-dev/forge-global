import SmallHeading from "../../components/SmallHeading";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import LinkButton from "./LinkButton";
function FAQLinks() {
  return (
    <SectionLayout>
      <SmallHeading extraClass={`tracking-wider uppercase pb-5`}>
        faqs
      </SmallHeading>
      <Title fontWeight={`font-medium`} align={`text-left`}>
        What can we help you with?
      </Title>
      <div className="my-7 h-[1px] w-full bg-borderPrimary dark:bg-borderPrimaryDark"></div>
      <div className="w-full flex flex-wrap tab:flex-nowrap items-center justify-center gap-7">
        <LinkButton text={`Institutions`} />
        <LinkButton text={`Shareholders`} />
        <LinkButton text={`Investors`} />
        <LinkButton text={`Companies`} />
      </div>
    </SectionLayout>
  );
}

export default FAQLinks;
