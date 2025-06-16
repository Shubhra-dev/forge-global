import Layer from "../../assets/icons/layer.svg";
import ExtraSmallText from "../../components/ExtraSmallText";
import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import SmallHeading from "../../components/SmallHeading";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import comapnyData from "../browse-companies/companyData";

function CompanyDetailsHero({ companyData }) {
  return (
    <div className="pt-24 pb-24 sm:pb-0 sm:pt-[65px] relative sm:h-[550px] w-full bg-white dark:bg-backgroundDarkGeneral bg-center bg-no-repeat flex items-center">
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto flex gap-4 sm:gap-0 flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-[60%]">
            <div className="w-max m-auto flex sm:w-full sm:m-0 items-center justify-normal gap-2">
              <img
                src={companyData.thumbnail_image}
                alt="logo"
                className="w-8 h-8"
              />
              <Heading
                align={`text-left`}
                font={`font-clash`}
                fontWeight={`font-medium`}
              >
                {companyData.name}
              </Heading>
            </div>
            <div className="mt-[15px] rounded-md w-full p-2.5 flex gap-4 sm:gap-0 flex-col sm:flex-row items-center justify-normal bg-backgroundPrimary dark:bg-backgroundCreamDark">
              <div className="w-full sm:w-1/2 sm:pr-8">
                <SubTitle
                  align={`text-center sm:text-left`}
                  fontWeight={`font-medium`}
                >
                  ${companyData.forge_price}
                  <span className="pl-1 text-center text-green-700 text-2xl font-normal">
                    +${companyData.growth} ({companyData.growth_percentage}%)
                  </span>
                </SubTitle>

                <div className="flex w-max m-auto sm:w-auto sm:m-0 items-center justify-normal gap-1 pt-1">
                  <img src={Layer} alt="layer" />
                  <SmallText fontWeight={`font-medium`}>
                    <span className="underline hover:text-blue-700 cursor-pointer">
                      Forge Price
                    </span>{" "}
                    updated {companyData.forge_price_updated}
                  </SmallText>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:pl-8 sm:border-l-2 border-l-gray-300">
                <SubTitle
                  align={`text-center sm:text-left`}
                  fontWeight={`font-medium`}
                >
                  $91.8B
                </SubTitle>
                <SmallText
                  align={`text-center sm:text-left`}
                  fontWeight={`font-medium`}
                  extraClass={`pt-1`}
                >
                  Forge Price Valuation, June 2025
                </SmallText>
              </div>
            </div>
            <div className="pt-7 w-full">
              <PrimaryButton
                rounded={`rounded-md`}
                extraClass={`w-full sm:w-[60%] text-center`}
              >
                Buy and Sell {companyData.name} stock
              </PrimaryButton>
              <SecondaryButton
                rounded={`rounded-md`}
                extraClass={`mt-4 w-full sm:w-[60%] text-center`}
              >
                Learn More About {companyData.name} IPO
              </SecondaryButton>
            </div>
          </div>
          <div className="w-full sm:w-[35%] tab:w-[25%]">
            <div className="border border-borderPrimary dark:border-borderPrimaryDark p-5 rounded-md bg-backgroundPrimary dark:bg-backgroundCreamDark">
              <SmallHeading fontWeight={`font-bold`}>
                Register to buy and sell private company shares
              </SmallHeading>
              <ExtraSmallText extraClass={`pt-1.5`}>
                For more details on private stock price information, financing
                and valuation for {companyData.name}, register or log in.
              </ExtraSmallText>
              <div className="py-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="p-3 border w-full bg-white dark:bg-backgroundTertiary"
                />
                <PrimaryButton
                  extraClass={`w-full mt-3 text-center`}
                  rounded={`rounded-none`}
                >
                  Register
                </PrimaryButton>
              </div>
              <ExtraSmallText>
                By registering, you agree to Forge’s{" "}
                <span className=" underline cursor-pointer hover:text-blue-400">
                  Terms of Use
                </span>
                . Already registered?{" "}
                <span className=" underline cursor-pointer hover:text-blue-400">
                  Log in
                </span>
              </ExtraSmallText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailsHero;
