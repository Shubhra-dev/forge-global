import UnlockBg from "../../assets/UnlockBg.jpg";
import Laptop from "../../assets/Laptop.jpg";
import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
function UnlockCompanies() {
  return (
    <div className="w-full py-8 px-5 dark:bg-backgroundDarkGeneral">
      <div
        className="relative max-w-content m-auto rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${UnlockBg})` }}
      >
        <div className="absolute rounded-3xl inset-0 bg-black/75 dark:block hidden z-10"></div>
        <div className="z-20 px-4 py-14 sm:py-[35px] smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto rounded-3xl flex items-center justify-normal gap-8 tab:gap-10">
          <div className="z-20 w-full sm:w-3/5 tab:w-[75%]">
            <Heading
              align={`text-center sm:text-left`}
              font={`font-clash`}
              extraClass={`pb-6`}
            >
              Unlock exclusive access to high-growth private companies
            </Heading>
            <div className="w-max m-auto sm:m-0 sm:w-auto">
              <PrimaryButton>Buy and Sell Shares</PrimaryButton>
            </div>
          </div>
          <div className="hidden sm:block w-2/5 tab:w-[25%] z-20">
            <img
              src={Laptop}
              alt="laptop"
              className="w-full h-[250px] outline-[10px] outline outline-backgroundPrimary dark:outline-borderPrimaryDark rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlockCompanies;
