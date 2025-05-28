import BrowseComapniesHero from "./BrowseCompaniesHero";
import FundingTable from "./FundingTable";
import NewsletterAndDisclosure from ".././../ui/NewsletterAndDisclosure";

function BrowseCompanies() {
  return (
    <>
      <BrowseComapniesHero />
      <FundingTable />
      <NewsletterAndDisclosure newsletter={false} />
    </>
  );
}

export default BrowseCompanies;
