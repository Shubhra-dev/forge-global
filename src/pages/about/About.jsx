import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import AboutHero from "./AboutHero";

function About() {
  return (
    <>
      <AboutHero />
      <SectionLayout>
        <div className="flex items-end justify-between gap-20">
          <div className="w-1/2">
            <Title fontWeight={`font-medium`} align={`text-left`}>
              We Operate with Unwavering{" "}
              <span className="text-primary font-semibold">Honesty</span> &
              Integrity
            </Title>
          </div>
          <div className="w-1/2">
            <Text>
              We offer a deeply personalized approach, providing objective,
              customized advice, seamless wealth management, and exclusive
              access to private investments, all designed to help clients reach
              their goals and build lasting wealth.
            </Text>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default About;
