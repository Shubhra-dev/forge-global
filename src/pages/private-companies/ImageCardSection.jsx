import ImageBoxTopCornerRounded from "../../components/ImageBoxTopCornerRounded";
import TwoPeople from "../../assets/TwoPeople.jpg";
import TenderOffer from "../../assets/TenderOffer.jpg";
import MarketUpdate from "../../assets/MarketUpdate.jpg";
import Liquidity from "../../assets/Liquidity.jpg";
import SectionLayout from "../../ui/SectionLayout";
function ImageCardSection() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap items-center justify-normal gap-8 tab:gap-10">
        <ImageBoxTopCornerRounded
          image={TwoPeople}
          title={`Case Study`}
          details={`How DocuSign used employee liquidity programs to stay private for 15 years and support talent along the way.`}
        />
        <ImageBoxTopCornerRounded
          image={TenderOffer}
          title={`Intro to tender offers`}
          details={`Learn more about how tender offers work and why they occur in Forge's blog post.`}
        />
        <ImageBoxTopCornerRounded
          image={MarketUpdate}
          title={`Private Market Update`}
          details={`Get up-to-date insights and analysis in our monthly private market update report.`}
        />
        <ImageBoxTopCornerRounded
          image={Liquidity}
          title={`Liquidity Programs`}
          details={`See how customized liquidity programs retain talent without sacrificing equity control.`}
        />
      </div>
    </SectionLayout>
  );
}

export default ImageCardSection;
