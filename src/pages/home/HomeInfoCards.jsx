import PhotoInfoCard from "../../components/PhotoInfoCard";
import SectionLayout from "../../ui/SectionLayout";
import SmallHeading from "../../components/SmallHeading";
import Stakeholder from "../../assets/Stakeholder.jpg";
import { BiCheck } from "react-icons/bi";
function HomeInfoCards() {
  return (
    <SectionLayout>
      <div className="w-full">
        <PhotoInfoCard
          image={Stakeholder}
          buttonText={"Learn More"}
          heading={"ShareHolder"}
          extraClass={`mb-[100px]`}
        >
          <div className="mb-6">
            <div className="flex items-center gap-2.5 justify-normal pb-[15px]">
              <BiCheck className="text-2xl w-[10%] dark:text-textHeadingDark text-textHeading" />
              <SmallHeading
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Discover the value of your shares
              </SmallHeading>
            </div>
            <div className="flex items-center gap-2.5 justify-normal pb-[15px]">
              <BiCheck className="text-2xl w-[10%] dark:text-textHeadingDark text-textHeading" />
              <SmallHeading
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Access competitive pricing
              </SmallHeading>
            </div>
            <div className="flex items-center gap-2.5 justify-normal pb-[15px]">
              <BiCheck className="text-2xl w-[10%] dark:text-textHeadingDark text-textHeading" />
              <SmallHeading
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Make informed decisions about when to sell
              </SmallHeading>
            </div>
          </div>
        </PhotoInfoCard>
        <PhotoInfoCard
          image={Stakeholder}
          buttonText={"Learn More"}
          heading={"Investors"}
          imagePosition="right"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2.5 justify-normal pb-[15px]">
              <BiCheck className="text-2xl w-[10%] dark:text-textHeadingDark text-textHeading" />
              <SmallHeading
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Discover the value of your shares
              </SmallHeading>
            </div>
            <div className="flex items-center gap-2.5 justify-normal pb-[15px]">
              <BiCheck className="text-2xl w-[10%] dark:text-textHeadingDark text-textHeading" />
              <SmallHeading
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Access competitive pricing
              </SmallHeading>
            </div>
            <div className="flex items-center gap-2.5 justify-normal pb-[15px]">
              <BiCheck className="text-2xl w-[10%] dark:text-textHeadingDark text-textHeading" />
              <SmallHeading
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Make informed decisions about when to sell
              </SmallHeading>
            </div>
          </div>
        </PhotoInfoCard>
      </div>
    </SectionLayout>
  );
}

export default HomeInfoCards;
