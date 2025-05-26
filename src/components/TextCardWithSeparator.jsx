import SmallHeading from "./SmallHeading";
import Text from "./Text";

function TextCardWithSeparator({ title, detail }) {
  return (
    <div className="h-auto sm:h-[390px] smLap:h-[350px] laptop:h-[300px] w-full sm:w-1/4 p-2.5 bg-white dark:bg-backgroundDark rounded-[20px] border border-borderPrimary dark:border-borderPrimaryDark">
      <div className="py-2 bg-backgroundPrimary dark:bg-backgroundPrimaryDark rounded-[10px]">
        <SmallHeading
          align={`text-center`}
          fontWeight={"font-bold"}
          extraClass={`laptop:w-4/5 m-auto`}
        >
          {title}
        </SmallHeading>
      </div>
      <div className="rounded-full my-[13px] w-24 h-1.5 bg-gradient-to-r from-secondary2 to-primary m-auto"></div>
      <div className="pb-4">
        <Text align={`text-center`}>{detail}</Text>
      </div>
    </div>
  );
}

export default TextCardWithSeparator;
