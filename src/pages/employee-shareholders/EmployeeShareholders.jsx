import FAQSection2 from "../../ui/FAQContainer2";
import EmployeeShareholderHero from "./EmployeeShareholderHero";
import HowSellPreIPO from "./HowSellPreIPO";
import HowMeetNeeds from "./HowMeetNeeds";
import FAQSection from "../../ui/FAQContainer";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";

function EmployeeShareholders() {
  return (
    <>
      <EmployeeShareholderHero />
      <HowSellPreIPO />
      <FAQSection2 />
      <HowMeetNeeds />
      <FAQSection
        title={`Understand key elements of your startup equity and selling pre-IPO shares.`}
        subTitle={`Understand key elements of your startup equity and selling pre-IPO shares.`}
      />
      <NewsletterAndDisclosure disclosurelist={false} />
    </>
  );
}

export default EmployeeShareholders;
