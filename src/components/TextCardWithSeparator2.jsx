import SmallHeading from "./SmallHeading";
import Text from "./Text";
import SecondaryButton from "./SecondaryButton";

function TextCardWithSeparator2({ title, detail, width, height, buttonText }) {
  return (
    <div
      className={`${height ? height : "h-auto sm:h-[480px] smLap:h-[400px] laptop:h-[360px]"} ${width ? width : "w-full sm:w-1/3"} p-[15px] bg-white dark:bg-backgroundDark rounded-[20px] border border-borderPrimary dark:border-borderPrimaryDark flex flex-col items-center justify-between`}
    >
      <div className="sm:h-[20%] mb-[13px] w-full">
        <div className="flex h-full flex-col justify-between items-center bg-backgroundPrimary dark:bg-backgroundPrimaryDark rounded-[10px]">
          <SmallHeading
            align={`text-center`}
            fontWeight={"font-bold"}
            extraClass={`my-auto`}
          >
            {title}
          </SmallHeading>
        </div>
        <div className="rounded-full mt-[13px] w-24 h-1.5 bg-gradient-to-r from-secondary2 to-primary m-auto"></div>
      </div>
      <div className="p-2 tab:p-0 tab:px-4 tab:pb-4 tab:pt-3 sm:h-[65%]">
        <Text align={`text-center`}>{detail}</Text>
      </div>
      <div className="pt-4 sm:pt-0">
        <SecondaryButton padding={`py-2 px-6`} rightIcon={true}>
          {buttonText}
        </SecondaryButton>
      </div>
    </div>
  );
}

export default TextCardWithSeparator2;
