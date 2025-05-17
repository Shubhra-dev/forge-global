import Pattern1 from "../assets/icons/Pattern-1.svg";
import Pattern1Dark from "../assets/icons/Pattern-1-Dark.svg";
import SmallHeading from "./SmallHeading";
import Text from "./Text";
function IconBox2() {
  return (
    <div className="w-1/4 p-2.5 rounded-3xl border border-borderPrimary flex flex-col gap-2.5 dark:border-borderPrimaryDark h-96">
      <div className="w-full h-[40%]">
        <img src={Pattern1} alt="pattern icon" className="dark:hidden" />
        <img
          src={Pattern1Dark}
          alt="pattern icon"
          className="hidden dark:block"
        />
      </div>
      <div className="w-full h-[60%] p-5 rounded-[15px] bg-backgroundPrimary dark:bg-backgroundPrimaryDark">
        <SmallHeading extraClass={"pb-6"}>Income Requirement</SmallHeading>
        <Text>
          Possess earned income over $200,000 (or $300,000 with a spouse or
          partner) for the past two years.
        </Text>
      </div>
    </div>
  );
}

export default IconBox2;
