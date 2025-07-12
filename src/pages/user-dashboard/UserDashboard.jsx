import DashboardLayout from "./DashboardLayout";
import BigText from "../../components/BigText";
import ExtraSmallText from "../../components/ExtraSmallText";
import SmallText from "../../components/SmallText";
import SmallHeading from "../../components/SmallHeading";
import Logo7 from "../../assets/icons/Logo-7.svg";

function UserDashboard() {
  return (
    <DashboardLayout activeTab={1}>
      <div className="mt-5 rounded-md bg-gray-50 sm:px-5 py-2.5">
        <BigText>Direct Investment Opportunities</BigText>
        <ExtraSmallText fontWeight={`font-normal pt-1`}>
          If you are interested in investing in companies not listed below,
          please visit Companies or contact your Private Market Specialist.
        </ExtraSmallText>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 tab:grid-cols-3 gap-3">
          <div className="p-5 rounded-md border border-borderPrimary">
            <div className="flex items-center justify-normal gap-5">
              <img
                src={Logo7}
                alt="boston logo"
                className="w-9 h-9 object-cover object-center"
              />
              <SmallHeading>Boston Metal</SmallHeading>
            </div>
            <div className="my-5">
              <div className="flex items-center justify-between">
                <ExtraSmallText>Price Per Share</ExtraSmallText>
                <SmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  $4.90
                </SmallText>
              </div>
              <div className="flex items-center justify-between mt-1">
                <ExtraSmallText>Security Type</ExtraSmallText>
              </div>
              <div className="my-[5px] border-b border-b-borderPrimary"></div>
              <div className="flex items-center justify-between">
                <ExtraSmallText>Last Round Price Per Share</ExtraSmallText>
                <ExtraSmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  $9.51
                </ExtraSmallText>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <ExtraSmallText>Last Round Date</ExtraSmallText>
                <ExtraSmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  Jan 2024
                </ExtraSmallText>
              </div>
              <div className="flex items-center justify-between">
                <ExtraSmallText>Last Round Valuation</ExtraSmallText>
                <ExtraSmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  $779.04MM
                </ExtraSmallText>
              </div>
            </div>
            <div className="w-full cursor-pointer px-3 py-2 rounded-[5px] shadow-[inset_0px_-5px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-0.50px] outline-borderPrimary hover:bg-secondary2 transition-all duration-500 inline-flex justify-center items-center gap-2">
              <div className="text-center uppercase justify-start text-primary text-xs font-bold leading-none">
                indicate interest
              </div>
            </div>
          </div>
          <div className="p-5 rounded-md border border-borderPrimary">
            <div className="flex items-center justify-normal gap-5">
              <img
                src={Logo7}
                alt="boston logo"
                className="w-9 h-9 object-cover object-center"
              />
              <SmallHeading>Boston Metal</SmallHeading>
            </div>
            <div className="my-5">
              <div className="flex items-center justify-between">
                <ExtraSmallText>Price Per Share</ExtraSmallText>
                <SmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  $4.90
                </SmallText>
              </div>
              <div className="flex items-center justify-between mt-1">
                <ExtraSmallText>Security Type</ExtraSmallText>
              </div>
              <div className="my-[5px] border-b border-b-borderPrimary"></div>
              <div className="flex items-center justify-between">
                <ExtraSmallText>Last Round Price Per Share</ExtraSmallText>
                <ExtraSmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  $9.51
                </ExtraSmallText>
              </div>
              <div className="flex items-center justify-between my-[5px]">
                <ExtraSmallText>Last Round Date</ExtraSmallText>
                <ExtraSmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  Jan 2024
                </ExtraSmallText>
              </div>
              <div className="flex items-center justify-between">
                <ExtraSmallText>Last Round Valuation</ExtraSmallText>
                <ExtraSmallText
                  textColor={`text-textHeading`}
                  font={`font-semibold`}
                >
                  $779.04MM
                </ExtraSmallText>
              </div>
            </div>
            <div className="w-full cursor-pointer px-3 py-2 rounded-[5px] shadow-[inset_0px_-5px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-0.50px] outline-borderPrimary hover:bg-secondary2 transition-all duration-500 inline-flex justify-center items-center gap-2">
              <div className="text-center uppercase justify-start text-primary text-xs font-bold leading-none">
                indicate interest
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;
