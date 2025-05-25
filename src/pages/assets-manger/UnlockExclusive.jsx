import UnlockBg from "../../assets/UnlockBg2.jpg";
import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
function UnlockExclusive() {
  return (
    <div className="w-full py-8 px-5 dark:bg-backgroundDarkGeneral">
      <div
        className="relative max-w-content m-auto rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${UnlockBg})` }}
      >
        <div className="absolute rounded-3xl inset-0 bg-black/65 dark:block hidden z-10"></div>
        <div className="z-20 px-4 py-[50px] smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto rounded-3xl flex items-center justify-center">
          <div className="w-full z-20">
            <Heading
              align={`text-center`}
              font={`font-clash`}
              extraClass={`pb-10`}
            >
              Unlock exclusive access to high-growth private companies
            </Heading>
            <div className="w-max m-auto">
              <PrimaryButton>Buy and Sell Shares</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlockExclusive;
