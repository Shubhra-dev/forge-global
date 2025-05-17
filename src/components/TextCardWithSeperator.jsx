import SmallHeading from "./SmallHeading";
import Text from "./Text";

function TextCardWithSeperator() {
  return (
    <div className="h-full w-1/4 p-2.5 bg-white dark:bg-backgroundDark rounded-[20px] border border-borderPrimary dark:border-borderPrimaryDark">
      <div className="py-2 bg-backgroundPrimary dark:bg-backgroundPrimaryDark rounded-[10px]">
        <SmallHeading align={`text-center`} fontWeight={"font-bold"}>
          Customize liquidity programs
        </SmallHeading>
      </div>
      <div className="rounded-full my-[13px] w-24 h-1.5 bg-primary m-auto"></div>
      <div className="pb-4">
        <Text align={`text-center`}>
          Forge offers the technology and expertise to easily establish and
          manage liquidity solutions, including tender offers, for your
          employees.
        </Text>
      </div>
    </div>
  );
}

export default TextCardWithSeperator;
