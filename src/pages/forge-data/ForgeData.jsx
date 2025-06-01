import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import DeepDive from "../seed-investors/DeepDive";
import ClarityAndConfidence from "./ClarityAndConfidence";
import ForgeDataHero from "./ForgeDataHero";
import IntegrateForgeData from "./IntegrateForgeData";
import RecencyTabSlider from "./RecencyTabSlider";
import JoinMarketPlace from "./JoinMarketPlace";

function ForgeData() {
  return (
    <>
      <ForgeDataHero />
      <ClarityAndConfidence />
      <IntegrateForgeData />
      <RecencyTabSlider />
      <DeepDive />
      <JoinMarketPlace />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosurelist={false}
        disclosureDetail={true}
        disclosureText={`Forge Price™ is calculated and disseminated by Forge Data LLC (“Forge Data”). All rights reserved. Forge Price™ is designed to reflect the up-to-date price performance of venture-backed, late-stage companies. Forge Price™ is determined based on a proprietary model incorporating the pricing inputs from primary founding round information and secondary market transactions, including indications of interest (IOIs). Secondary market transactions are sourced from Forge Securities LLC (an affiliate of Forge Data), a leading market platform, and data collected from other private market trading platforms. The Forge Price™ is a mark of Forge Data. The Forge Price™ is solely for informational purposes and is based upon information from sources believed to be reliable, however Forge Data makes no assurance as to the accuracy or reliability of this data. Forge Data is not an investment adviser and makes no representation regarding the advisability of investing in any asset or asset class. Private company securities are highly illiquid, and the Forge Price™ may rely on a very limited number of trade and/or IOI inputs in its calculation. Brokerage products and services are offered by Forge Securities LLC, a registered broker-dealer and member FINRA/SIPC. Neither reference to company names, nor calculation of Forge Price™ for a particular company(ies) implies any affiliation between Forge or its affiliates and any company, any endorsement or sponsorship of Forge or its affiliates by any company or vice versa, or any partnership, joint venture or other commercial relationship between Forge or its affiliates and any company. Rights with respect to any company marks referred to herein are, as between Forge and its affiliates and such company, owned by the company.
`}
      />
    </>
  );
}

export default ForgeData;
