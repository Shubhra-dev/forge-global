import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import Text from "../../components/Text";
function MajorInvestors() {
  const major_investors = [
    {
      name: "369 Growth Partners",
      investments: ["xAI", "Impossible Foods", "DataRobot", "Rentberry"],
    },
    {
      name: "Andra Capital",
      investments: ["xAI", "Convoy", "Cybereason"],
    },
    {
      name: "Andreessen Horowitz",
      investments: [
        "Anduril",
        "xAI",
        "Stripe",
        "Saronic",
        "Ripple",
        "Zipline",
        "Waymo",
        "Figma",
        "Shield AI",
        "Replit",
      ],
    },
    {
      name: "Ark Investment Management",
      investments: ["xAI", "Outrider"],
    },
    {
      name: "Beyond Alpha Ventures",
      investments: ["xAI"],
    },
    {
      name: "Bossa Invest",
      investments: [
        "xAI",
        "Lightmatter",
        "Agility Robotics",
        "OneTrust",
        "Tavus",
        "Mudflap",
        "Oyster",
        "Pearl",
        "Novo",
        "Xepelin",
      ],
    },
    {
      name: "Brilliant Phoenix Capital Management",
      investments: ["xAI", "Cohere"],
    },
    {
      name: "Camford Capital",
      investments: ["xAI", "SURGE Therapeutics", "Stori", "Totus Medicines"],
    },
    {
      name: "Craft Ventures",
      investments: [
        "xAI",
        "Neuralink",
        "The Boring Company",
        "ClickUp",
        "Quora",
        "Horizon3.ai",
        "Peregrine",
        "FingerprintJS",
        "Vanta",
        "Snackpass",
      ],
    },
  ];
  return (
    <SectionLayout id={`major-investor`}>
      <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
        “Company Name” investors also invested in these private companies
      </SubTitle>
      <div className="pt-5 flex flex-wrap items-start justify-between">
        {major_investors.map((item, index) => (
          <div key={index} className="w-full sm:w-[47%] tab:w-[30%] pb-5">
            <Text
              textColor={`text-textHeading`}
              textColorDark={`text-textHeadingDark`}
              fontWeight={`font-medium`}
            >
              {item.name}
            </Text>
            <Text>
              {item.investments.map((invest, idx) => (
                <span
                  key={idx}
                  className="cursor-pointer"
                  onClick={() => {}}
                >{`${invest}, `}</span>
              ))}
            </Text>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default MajorInvestors;
