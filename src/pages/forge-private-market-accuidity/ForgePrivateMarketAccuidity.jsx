import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import ForgePrivateMarketIndexAccuidityHero from "./ForgePrivateMarketIndexAccuidityHero";
import IndexComposition from "./IndexComposition";
import IndexPerformance from "./IndexPerformance";
import Methodology from "./Methodology";
import PrivateMarketParticipants from "./PrivateMarketParticipants";

function ForgePrivateMarketAccuidity() {
  return (
    <>
      <ForgePrivateMarketIndexAccuidityHero />
      <IndexPerformance />
      <IndexComposition />
      <Methodology />
      <PrivateMarketParticipants />

      <NewsletterAndDisclosure
        newsletter={false}
        disclosurelist={false}
        disclosureDetail={true}
      />
    </>
  );
}

export default ForgePrivateMarketAccuidity;
