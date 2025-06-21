import SectionLayout from "../../ui/SectionLayout";
import AboutHero from "./AboutHero";
import CultureInnovation from "./CultureInnovation";
import OfficersAndCEO from "./OfficersAndCEO";
import WeOperate from "./WeOperate";

function About() {
  return (
    <>
      <AboutHero />
      <WeOperate />
      <CultureInnovation />
      <OfficersAndCEO />
      <SectionLayout></SectionLayout>
    </>
  );
}

export default About;
