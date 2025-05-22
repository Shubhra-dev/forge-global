import SecondaryButton from "./SecondaryButton";
import SmallHeading from "./SmallHeading";
import Text from "./Text";
function PhotoCardWithButton({ image, title, text }) {
  return (
    <div className="h-[500px] tab:h-[460px] w-full sm:w-[48%] tab:w-[32%] p-[10px] rounded-3xl bg-white border border-borderPrimary dark:bg-backgroundDark">
      <img
        src={image}
        alt="People"
        className="w-full object-cover h-[40%] rounded-3xl"
      />
      <div className="p-4 flex flex-col justify-between h-[58%] bg-backgroundCream dark:bg-backgroundCreamDark rounded-3xl mt-2.5">
        <div>
          <SmallHeading extraClass={`pb-3`}>{title}</SmallHeading>
          <Text>{text}</Text>
        </div>
        <SecondaryButton padding={"py-2 px-3"} iconUp={true}>
          Open a Forge Account
        </SecondaryButton>
      </div>
    </div>
  );
}

export default PhotoCardWithButton;
