import StarBig from "../../assets/StarBig.png";
import Title from "../../components/Title";
import BigText from "../../components/BigText";
import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import JobCard from "./JobCard";
function JobLists() {
  return (
    <div className="w-full bg-white dark:bg-backgroundDarkGeneral">
      <div className="max-w-content m-auto bg-white relative z-10 rounded-3xl overflow-hidden">
        {/* Image layer */}
        <img src={StarBig} alt="star" className="absolute z-0" />
        <div className="relative z-10 bg-backgroundBronzeDark/85 w-full rounded-3xl">
          <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-12 sm:py-16 tab:py-24">
            <div className="w-[30%]">
              <Title
                align={`text-left`}
                fontWeight={`font-medium`}
                textColor={"text-textHeadingDark"}
                textColorDark={` `}
              >
                Join the Forge{" "}
                <span className="text-textHeading font-semibold">Family</span>
              </Title>
            </div>
            <div className="pt-7 flex flex-col tab:flex-row items-start justify-between gap-10">
              <div className="w-full tab:w-[30%] flex flex-row tab:flex-col gap-2 sm:gap-4 tab:gap-0">
                <div className="w-1/2 tab:w-full p-2.5">
                  <BigText textColor={`text-primary`} textColorDark={` `}>
                    Deapartment
                  </BigText>
                  <ul className="list-disc list-inside pl-4 text-xl pt-5 font-bold text-white">
                    <li>All</li>
                  </ul>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                    extraClass={`pt-2`}
                  >
                    Forge Trusts
                  </SmallHeading>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                  >
                    Marketing
                  </SmallHeading>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                  >
                    People
                  </SmallHeading>
                </div>
                <div className="w-1/2 tab:w-full tab:mt-5 p-2.5">
                  <BigText textColor={`text-primary`} textColorDark={` `}>
                    Locations
                  </BigText>
                  <ul className="list-disc list-inside pl-4 text-xl pt-5 font-bold text-white">
                    <li>All</li>
                  </ul>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                    extraClass={`pt-2`}
                  >
                    Dhaka, Bangladesh
                  </SmallHeading>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                  >
                    Chottogram, Bangladesh
                  </SmallHeading>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                  >
                    Rajshahi, Bangladesh
                  </SmallHeading>
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    textColorDark={` `}
                    fontWeight={`font-normal`}
                  >
                    Remote
                  </SmallHeading>
                </div>
              </div>
              <div className="w-full tab:w-[70%]">
                <div>
                  <SubTitle textColor={`text-primary`} textColorDark={" "}>
                    Forge Trust
                  </SubTitle>
                  <JobCard
                    jobName={`Sales Director, Custody`}
                    location={`Remote`}
                  />
                </div>
                <div className="my-[60px]">
                  <SubTitle textColor={`text-primary`} textColorDark={" "}>
                    Forge Trust
                  </SubTitle>
                  <JobCard
                    jobName={`Director, Product Marketing, Custody & Wealth`}
                    location={`Dhaka`}
                  />
                  <JobCard
                    jobName={`Lifecycle Marketing Manager`}
                    location={`Chattogram`}
                    borderY={true}
                  />
                  <JobCard
                    jobName={`Lifecycle Marketing Manager`}
                    location={`Rajshahi`}
                  />
                </div>
                <div className="my-[60px]">
                  <SubTitle textColor={`text-primary`} textColorDark={" "}>
                    People
                  </SubTitle>
                  <JobCard
                    jobName={`Global Payroll & Compensation Specialist`}
                    location={`Chattogram`}
                  />
                  <JobCard
                    jobName={`Global Payroll & Compensation Specialist`}
                    location={`Rajshahi`}
                    borderY={true}
                  />
                  <JobCard
                    jobName={`Global Payroll & Compensation Specialist`}
                    location={`Dhaka`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobLists;
