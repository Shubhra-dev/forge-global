import DiscoverCompanies from "./DiscoverCompanies";
import ForgePrice from "./ForgePrice";
import HomeHero from "./HomeHero";
import HomeInfoCards from "./HomeInfoCards";
import PrivateMarketTrend from "./PrivateMarketTrend";
import UnlockCompanies from "./UnlockCompanies";

function Home() {
  return (
    <>
      <HomeHero />
      <HomeInfoCards />
      <DiscoverCompanies />
      <ForgePrice />
      <PrivateMarketTrend />
      <UnlockCompanies />
    </>
  );
}

export default Home;
