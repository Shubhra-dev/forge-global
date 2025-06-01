import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import CustomIndex from "./CustomIndex";
import ForgePrivateMarketIndexHero from "./ForgePrivateMarketIndexHero";
import IndexComposition from "./IndexComposition";
import IndexPerformance from "./IndexPerformance";
import Methodology from "./Methodology";
import PrivateMarketParticipants from "./PrivateMarketParticipants";

function ForgePrivateMarket() {
  return (
    <>
      <ForgePrivateMarketIndexHero />
      <IndexPerformance />
      <IndexComposition />
      <Methodology />
      <PrivateMarketParticipants />
      <CustomIndex />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosurelist={false}
        disclosureDetail={true}
      />
    </>
  );
}

export default ForgePrivateMarket;
