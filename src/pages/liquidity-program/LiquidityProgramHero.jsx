import LiqProHerobg from "../../assets/LiqProHerobg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function LiquidityProgramHero() {
  return (
    <div
      className="py-[100px] sm:py-0 pt-[65px] h-auto sm:h-[600px] relative w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${LiqProHerobg})` }}
    >
      <div className="m-auto max-w-content w-full z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto z-20">
          <div className="m-0 sm:m-auto w-full sm:w-[90%]">
            <BigText
              align={`text-center`}
              fontWeight={`font-semibold`}
              extraClass={`uppercase tracking-wide pb-2.5`}
              textColor={`text-gray-500`}
              textColorDark={` `}
            >
              Liquidity Programs
            </BigText>
            <Title align={`text-center`} textColorDark={` `}>
              Retain and reward employees with company-sponsored liquidity
              solutions
            </Title>
            <BigText
              extraClass={`pt-2.5`}
              align={`text-center`}
              textColorDark={` `}
            >
              Whether through fixed-price tender offers or customized ongoing
              programs, forward-thinking companies view liquidity as a key
              benefit in supporting top talent. With Forge’s technology, company
              leadership maintains control, while employees unlock the value of
              their hard-earned equity.
            </BigText>
            <div className="pt-10 w-max m-auto">
              <PrimaryButton>Connect With Our Expertise</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiquidityProgramHero;
