import HomeHeroBg from "../../assets/HomeHeroBg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import Title from "../../components/Title";
function HomeHero() {
  return (
    <div
      className="pt-[65px] h-[550px] w-full bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: `url(${HomeHeroBg})` }}
    >
      <div className="absolute inset-0 bg-black/75 dark:block hidden z-10"></div>
      <div className=" m-auto max-w-content relative z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto max-w-content my-auto flex flex-col tab:flex-row items-center justify-normal gap-10">
          <div className="w-11/12 m-auto tab:m-0 tab:w-2/5">
            <Title align={`text-center tab:text-left`}>
              Unicorn liquidity has arrived
            </Title>
          </div>
          <div className="w-11/12 m-auto tab:m-0 tab:w-3/5">
            <BigText align={`text-center tab:text-left`}>
              Join the new generation of people and institutions buying and
              selling private company shares.
            </BigText>
            <div className="py-5 flex flex-col sm:flex-row items-center gap-5 w-max m-auto sm:m-0">
              <PrimaryButton>Buy and Sell Shares</PrimaryButton>
              <SecondaryButton>Browse Companies</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
