import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import PhotoWithBgReverse from "../../components/PhotoWithBgReverse";
import SecondaryButton from "../../components/SecondaryButton";
import Man2 from "../../assets/Man2.png";
import CheckText from "../accredited-investor/CheckText";
import Text from "../../components/Text";
import BigText from "../../components/BigText";
function HowSellPreIPO() {
  return (
    <SectionLayout
      bg={`bg-backgroundCream`}
      bgDark={`dark:bg-backgroundCreamDark`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="w-full sm:w-[40%]">
          <PhotoWithBgReverse image={Man2} />
        </div>
        <div className="w-full sm:w-[55%]">
          <Heading
            font={`font-clash`}
            align={`text-left`}
            extraClass={`pb-2.5`}
          >
            How to sell pre-IPO stock?
          </Heading>
          <Text extraClass={`pb-4`}>
            If you hold private company shares – whether as an employee or an
            early investor – Forge can help connect you with accredited
            investors to potentially purchase your shares at a mutually
            agreed-upon price.
          </Text>
          <div className="hidden tab:block">
            <BigText fontWeight={`font-semibold`}>
              The process from start to sell
            </BigText>
            <ul className="pt-2.5 pb-7 text-base text-textParagraph dark:text-textParagraphDark font-workSans list-decimal list-inside">
              <li>
                Create a free Forge account to connect with a Private Market
                Specialist.
              </li>
              <li>
                Indicate your interest to sell and access Forge’s network of
                accredited investors and institutions.
              </li>
              <li>
                Work with Forge's Private Market Specialists who'll help guide
                you through every step of the transaction.
              </li>
            </ul>

            <div className="w-max m-auto sm:m-0">
              <SecondaryButton>Create a Forge Account</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="tab:hidden w-full pt-10">
        <BigText fontWeight={`font-semibold`}>
          The process from start to sell
        </BigText>
        <ul className="pt-2.5 pb-7 text-base text-textParagraph dark:text-textParagraphDark font-workSans list-decimal list-inside">
          <li>
            Create a free Forge account to connect with a Private Market
            Specialist.
          </li>
          <li>
            Indicate your interest to sell and access Forge’s network of
            accredited investors and institutions.
          </li>
          <li>
            Work with Forge's Private Market Specialists who'll help guide you
            through every step of the transaction.
          </li>
        </ul>

        <div className="w-max m-auto">
          <SecondaryButton>Create a Forge Account</SecondaryButton>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowSellPreIPO;
