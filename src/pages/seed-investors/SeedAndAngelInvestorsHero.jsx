import SeedAngleHeroBg from "../../assets/SeedAngleHeroBg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function SeedAndAngelInvestorsHero() {
  return (
    <div
      className="pt-[65px] h-[600px] sm:h-[550px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${SeedAngleHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto">
          <div className="w-full sm:w-[90%] tab:w-[70%] m-auto">
            <Title align={`text-center`} textColor={`text-textHeadingDark`}>
              Enhanced liquidity potential for your{" "}
              <span className="text-primary">angel portfolio</span>
            </Title>
            <BigText
              extraClass={`pt-2.5`}
              textColor={`text-textHeadingDark`}
              textColorDark={`dark:text-textHeadingDark`}
              align={`text-center`}
            >
              Forge offers seed and angel investors a platform for managing
              their private company investments. Investors can execute trades,
              research new investment opportunities, and gain valuable market
              insights with Forge’s proprietary private market data.
            </BigText>
            <div className="pt-10 w-max m-auto">
              <PrimaryButton>Sign Up for Forge</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeedAndAngelInvestorsHero;
